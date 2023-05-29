import { useRouter } from "next/router";
import { useCreateStudent } from "../../../../services";
import {
  useCheckCreationFormChanges,
  useCheckImageWasUploaded,
  useGetFormBasicResponseHandlers,
  useGetPersonFormDisableSubmit,
  useGetPersonFormFieldsSpecifics,
  useGetPersonFormState,
} from "../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../typings/forms";
import { STUDENTS_ROUTE, STUDENT_ENTITY } from "../../../../config/constants";

const useGetCreateStudentComponentsProps = (): FormsComponentsProps => {
  const title = "Create a brand new student";
  const buttonText = "Create student";
  const informationMissingError = "Please add the information as required";
  const cancelRoute = `/${STUDENTS_ROUTE}`;
  const entity = STUDENT_ENTITY;
  const isPerson = true;
  const { push } = useRouter();

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetPersonFormState({});

  const formFieldsSpecificsArray = useGetPersonFormFieldsSpecifics(
    formData,
    formVisited
  );

  const {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
    keepLoading,
    setKeepLoading,
  } = useGetFormBasicResponseHandlers(entity);

  const { createStudent, isLoading, message } = useCreateStudent({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const checkChanges = useCheckCreationFormChanges(formData);

  const formIsLoading = isLoading || keepLoading;

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
      createStudent(formData);
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

export default useGetCreateStudentComponentsProps;
