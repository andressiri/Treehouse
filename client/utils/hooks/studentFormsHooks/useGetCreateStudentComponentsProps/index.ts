import { useRouter } from "next/router";
import { useCreateStudent } from "../../../../services";
import {
  useCheckCreationFormChanges,
  useCheckImageWasUploaded,
  useGetPersonFormDisableSubmit,
  useGetPersonFormFieldsSpecifics,
  useGetPersonFormState,
  useGetStudentFormResponseHandlers,
} from "../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../typings/forms";
import { STUDENTS_ROUTE } from "../../../../config/constants";

const useGetCreateStudentComponentsProps = (): FormsComponentsProps => {
  const title = "Create a brand new student";
  const buttonText = "Create student";
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

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetStudentFormResponseHandlers();

  const { createStudent, isLoading, message } = useCreateStudent({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const checkChanges = useCheckCreationFormChanges(formData);

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (checkChanges()) {
      setErrorMessage("");
      createStudent(formData);
    } else {
      setErrorMessage("Please add the information required");
    }
  };

  const disableSubmit = useGetPersonFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    isLoading
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

export default useGetCreateStudentComponentsProps;
