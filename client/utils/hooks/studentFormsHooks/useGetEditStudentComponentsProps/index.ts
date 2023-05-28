import { useEditStudent, useRemoveStudentFromRoom } from "../../../../services";
import { sanitizeFormChanges } from "../../../../utils/helpers";
import {
  useCheckImageWasUploaded,
  useGetFormBasicResponseHandlers,
  useGetPersonFormDisableSubmit,
  useGetPersonFormFieldsSpecifics,
  useGetPersonFormState,
} from "../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../typings/forms";
import { STUDENT_ENTITY } from "../../../../config/constants";
import { IStudent } from "../../../../typings/students";
import { IPersonFormData } from "../../../../typings/persons";

const useGetEditStudentComponentsProps = (
  student: IStudent
): FormsComponentsProps => {
  const title = `Edit ${student.name} student`;
  const buttonText = "Edit student";
  const noChangesError = "There are no changes to submit";
  const successMessage = `${student.name} edited successfully`;
  const entity = STUDENT_ENTITY;
  const isPerson = true;

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetPersonFormState({ person: student });

  const {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
    keepLoading,
    setKeepLoading,
  } = useGetFormBasicResponseHandlers(entity);

  const formFieldsSpecificsArray = useGetPersonFormFieldsSpecifics(
    formData,
    formVisited
  );

  const noRemoveFromRoomRequired = Boolean(
    formData.roomId || (!formData.roomId && !student.roomId)
  );

  const {
    removeStudentFromRoom,
    isLoading: removeLoading,
    message: removeMessage,
  } = useRemoveStudentFromRoom({
    errorAction: () => errorAction(removeMessage),
    successAction,
    successMessage,
    successToast: true,
  });

  const {
    editStudent,
    isLoading: editLoading,
    message: editMessage,
  } = useEditStudent({
    errorAction: () => {
      noRemoveFromRoomRequired
        ? errorAction(editMessage)
        : removeStudentFromRoom(student.id);
    },
    successAction: () => {
      noRemoveFromRoomRequired
        ? successAction()
        : removeStudentFromRoom(student.id);
    },
    successToast: noRemoveFromRoomRequired,
  });

  const checkChanges = () =>
    Boolean(sanitizeFormChanges(formData, student, true));

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = sanitizeFormChanges(formData, student);

    if (data || imageWasUploaded) {
      setErrorMessage("");
      setKeepLoading(true);
      editStudent(data as Partial<IPersonFormData>, student.id);
    } else {
      setErrorMessage(noChangesError);
    }
  };

  const formIsLoading = editLoading || removeLoading || keepLoading;

  const disableSubmit = useGetPersonFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    formIsLoading
  );

  const handleCancel = () => successAction();

  return {
    title,
    imageProps: {
      image: student.picture,
      isPerson,
      notifyImageWasUploaded,
      notifyImageWasCanceled,
    },
    formProps: {
      formData,
      formVisited,
      formFieldsSpecificsArray,
      handleVisited,
      handleOnChange,
      checkChanges,
      handleSubmit,
      handleCancel,
      errorMessage,
      disableSubmit,
      formIsLoading,
      buttonText,
    },
  };
};

export default useGetEditStudentComponentsProps;
