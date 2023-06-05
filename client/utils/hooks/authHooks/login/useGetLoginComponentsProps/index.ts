import { useRouter } from "next/router";
import { useLoginUser } from "../../../../../services";
import {
  useCheckCreationFormChanges,
  useGetFormBasicResponseHandlers,
  useGetLoginFormDisableSubmit,
  useGetLoginFormFieldsSpecifics,
  useGetLoginFormState,
} from "../../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../../typings/forms";

const useGetLoginComponentsProps = (): Omit<
  FormsComponentsProps,
  "imageProps"
> => {
  const title = "Login as user";
  const buttonText = "Login";
  const informationMissingError = "Please add the information as required";
  const cancelRoute = `/`;
  const { push } = useRouter();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetLoginFormState();

  const formFieldsSpecificsArray = useGetLoginFormFieldsSpecifics(
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

  const { loginUser, isLoading, message } = useLoginUser({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const checkChanges = useCheckCreationFormChanges(formData);

  const formIsLoading = isLoading || keepLoading;

  const disableSubmit = useGetLoginFormDisableSubmit(
    formData,
    checkChanges,
    formIsLoading
  );

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!disableSubmit) {
      setErrorMessage("");
      setKeepLoading(true);

      loginUser(formData);
    } else {
      setErrorMessage(informationMissingError);
    }
  };

  const handleCancel = () => push(cancelRoute);

  return {
    title,
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

export default useGetLoginComponentsProps;
