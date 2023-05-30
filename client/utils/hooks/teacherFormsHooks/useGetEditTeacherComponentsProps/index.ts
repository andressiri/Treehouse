import {
  useEditRoom,
  useEditTeacher,
  useRemoveTeacherFromRoom,
} from "../../../../services";
import { sanitizeFormChanges } from "../../../../utils/helpers";
import {
  useCheckImageWasUploaded,
  useGetFormBasicResponseHandlers,
  useGetPersonFormDisableSubmit,
  useGetPersonFormFieldsSpecifics,
  useGetPersonFormState,
} from "../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../typings/forms";
import { TEACHER_ENTITY } from "../../../../config/constants";
import { ITeacherWithRelations } from "../../../../typings/teachers";
import { IPersonFormData } from "../../../../typings/persons";
import { IRoom } from "../../../../typings/rooms";

const useGetEditTeacherComponentsProps = (
  teacher: ITeacherWithRelations
): FormsComponentsProps => {
  const title = `Edit ${teacher.name} teacher`;
  const buttonText = "Edit teacher";
  const noChangesError = "There are no changes to submit";
  const successMessage = `${teacher.name} edited successfully`;
  const entity = TEACHER_ENTITY;
  const isPerson = true;

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetPersonFormState({ person: teacher });

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
    formVisited,
    true,
    teacher.id
  );

  const noRoomActionRequired = Boolean(
    (formData.roomId && formData.roomId === `${(teacher.Room as IRoom)?.id}`) ||
      (!formData.roomId && !(teacher.Room as IRoom)?.id)
  );

  const {
    editRoom,
    isLoading: roomLoading,
    message: roomMessage,
  } = useEditRoom({
    errorAction: () => errorAction(roomMessage),
    successAction,
    successMessage,
    successToast: true,
  });

  const {
    removeTeacherFromRoom,
    isLoading: removeLoading,
    message: removeMessage,
  } = useRemoveTeacherFromRoom({
    errorAction: () => errorAction(removeMessage),
    successAction: () => {
      !formData.roomId
        ? successAction()
        : editRoom({ teacherId: `${teacher.id}` }, Number(formData.roomId));
    },
    successMessage,
    successToast: Boolean(!formData.roomId),
  });

  const editTeacherAction = (responseAction: () => void) => {
    noRoomActionRequired
      ? responseAction()
      : (teacher.Room as IRoom)?.id
      ? removeTeacherFromRoom((teacher.Room as IRoom)?.id)
      : editRoom({ teacherId: `${teacher.id}` }, Number(formData.roomId));
  };

  const {
    editTeacher,
    isLoading: editLoading,
    message: editMessage,
  } = useEditTeacher({
    errorAction: () => {
      editTeacherAction(() => errorAction(editMessage));
    },
    successAction: () => {
      editTeacherAction(() => successAction());
    },
    successToast: noRoomActionRequired,
  });

  const objectToCompare = {
    name: teacher.name,
    age: teacher.age,
    gender: teacher.gender,
    description: teacher.description,
    roomId: (teacher.Room as IRoom)?.id,
  };

  const checkChanges = () =>
    Boolean(sanitizeFormChanges(formData, objectToCompare, true));

  const formIsLoading =
    editLoading || roomLoading || removeLoading || keepLoading;

  const disableSubmit = useGetPersonFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    formIsLoading
  );

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = sanitizeFormChanges(
      formData,
      objectToCompare
    ) as Partial<IPersonFormData>;

    if (!disableSubmit && (data || imageWasUploaded)) {
      setErrorMessage("");
      setKeepLoading(true);

      if (data.roomId || data.roomId === "") delete data.roomId;
      editTeacher(data, teacher.id);
    } else {
      setErrorMessage(noChangesError);
    }
  };

  const handleCancel = () => successAction();

  return {
    title,
    imageProps: {
      image: teacher.picture,
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

export default useGetEditTeacherComponentsProps;
