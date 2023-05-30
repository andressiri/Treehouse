import { useContext } from "react";
import { TeachersContext } from "../../../../contexts";
import { useRouter } from "next/router";
import { useCreateTeacher, useEditRoom } from "../../../../services";
import {
  useCheckCreationFormChanges,
  useCheckImageWasUploaded,
  useGetFormBasicResponseHandlers,
  useGetPersonFormDisableSubmit,
  useGetPersonFormFieldsSpecifics,
  useGetPersonFormState,
} from "../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../typings/forms";
import { ITeacher } from "../../../../typings/teachers";
import { STUDENTS_ROUTE, TEACHER_ENTITY } from "../../../../config/constants";
import { IPersonFormData } from "../../../../typings/persons";

const useGetCreateTeacherComponentsProps = (): FormsComponentsProps => {
  const { teacher } = useContext(TeachersContext);
  const title = "Create a brand new teacher";
  const buttonText = "Create teacher";
  const informationMissingError = "Please add the information as required";
  const successMessage = `${
    (teacher as ITeacher)?.name
  } teacher created successfully`;
  const cancelRoute = `/${STUDENTS_ROUTE}`;
  const entity = TEACHER_ENTITY;
  const isPerson = true;
  const { push } = useRouter();

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetPersonFormState({});

  const formFieldsSpecificsArray = useGetPersonFormFieldsSpecifics(
    formData,
    formVisited,
    true
  );

  const {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
    keepLoading,
    setKeepLoading,
  } = useGetFormBasicResponseHandlers(entity);

  const {
    editRoom,
    isLoading: roomLoading,
    message: roomMessage,
  } = useEditRoom({
    errorAction: () => errorAction(roomMessage),
    successAction,
    successToast: true,
    successMessage,
  });

  const teachersSuccessAction = () => {
    if (!formData.roomId) {
      successAction();
      return;
    }

    editRoom(
      { teacherId: `${(teacher as ITeacher)?.id}` },
      Number(formData.roomId)
    );
  };

  const {
    createTeacher,
    isLoading: teacherLoading,
    message: teacherMessage,
  } = useCreateTeacher({
    errorAction: () => errorAction(teacherMessage),
    successAction: teachersSuccessAction,
    successToast: Boolean(!formData.roomId),
  });

  const checkChanges = useCheckCreationFormChanges(formData);

  const formIsLoading = teacherLoading || roomLoading || keepLoading;

  const disableSubmit = useGetPersonFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    formIsLoading
  );

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!disableSubmit) {
      setErrorMessage("");
      setKeepLoading(true);

      const data: IPersonFormData = { ...formData };
      if (data.roomId || data.roomId === "") delete data.roomId;
      createTeacher(data as Omit<IPersonFormData, "roomId">);
    } else {
      setErrorMessage(informationMissingError);
    }
  };

  const handleCancel = () => push(cancelRoute);

  return {
    title,
    imageProps: {
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

export default useGetCreateTeacherComponentsProps;
