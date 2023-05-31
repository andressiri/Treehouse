import { useRouter } from "next/router";
import { useRegisterUser } from "../../../../../services";
import {
  useCheckCreationFormChanges,
  useCheckImageWasUploaded,
  useGetFormBasicResponseHandlers,
  useGetRegisterFormDisableSubmit,
  useGetRegisterFormFieldsSpecifics,
  useGetRegisterFormState,
} from "../../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../../typings/forms";

const useGetRegisterComponentsProps = (): FormsComponentsProps => {
  const title = "Register as user";
  const buttonText = "Register";
  const informationMissingError = "Please add the information as required";
  const cancelRoute = `/`;
  const isPerson = true;
  const { push } = useRouter();

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetRegisterFormState();

  const formFieldsSpecificsArray = useGetRegisterFormFieldsSpecifics(
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
  } = useGetFormBasicResponseHandlers();

  const { registerUser, isLoading, message } = useRegisterUser({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const checkChanges = useCheckCreationFormChanges(formData);

  const formIsLoading = isLoading || keepLoading;

  const disableSubmit = useGetRegisterFormDisableSubmit(
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

      registerUser(formData);
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

export default useGetRegisterComponentsProps;
