import { useContext, useState } from "react";
import { TeachersContext } from "../../../../contexts";
import { useRouter } from "next/router";
import { useCreateTeacher, useEditRoom } from "../../../../services";
import {
  useCheckCreationFormChanges,
  useCheckImageWasUploaded,
  useGetPersonFormDisableSubmit,
  useGetPersonFormFieldsSpecifics,
  useGetPersonFormState,
  useGetTeacherFormResponseHandlers,
} from "../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../typings/forms";
import { ITeacher } from "../../../../typings/teachers";
import { STUDENTS_ROUTE } from "../../../../config/constants";

const useGetCreateTeacherComponentsProps = (): FormsComponentsProps => {
  const { teacher } = useContext(TeachersContext);
  const [keepLoading, setKeepLoading] = useState(false);
  const title = "Create a brand new teacher";
  const buttonText = "Create teacher";
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

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetTeacherFormResponseHandlers();

  const {
    editRoom,
    isLoading: roomLoading,
    message: roomMessage,
  } = useEditRoom({
    errorAction: () => {
      errorAction(roomMessage);
      setKeepLoading(false);
    },
    successAction: () => {
      setKeepLoading(false);
      successAction();
    },
    successToast: true,
    successMessage: `${
      (teacher as ITeacher)?.name
    } teacher created successfully`,
  });

  const teachersSuccessAction = () => {
    if (!formData.roomId) {
      successAction();
      setKeepLoading(false);
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
    errorAction: () => {
      errorAction(teacherMessage);
      setKeepLoading(false);
    },
    successAction: teachersSuccessAction,
    successToast: Boolean(!formData.roomId),
  });

  const checkChanges = useCheckCreationFormChanges(formData);

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (checkChanges()) {
      setErrorMessage("");
      setKeepLoading(true);
      createTeacher(formData);
    } else {
      setErrorMessage("Please add the information required");
    }
  };

  const formIsLoading = teacherLoading || roomLoading || keepLoading;

  const disableSubmit = useGetPersonFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    formIsLoading
  );

  const handleCancel = () => push(`/${STUDENTS_ROUTE}`);

  return {
    title,
    imageProps: {
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
      buttonText,
    },
    isPerson,
  };
};

export default useGetCreateTeacherComponentsProps;
