import { useEffect } from "react";
import { toast } from "react-toastify";
import { IHandleResponseProps } from "../../../typings/services";

const useHandleResponseEffect = ({
  errorCondition = true,
  successCondition = true,
  errorAction,
  successAction,
  errorToast,
  errorMessage,
  successToast,
  successMessage,
  serviceState,
}: IHandleResponseProps) => {
  const { isError, setIsError, isSuccess, setIsSuccess, message, setMessage } =
    serviceState;

  useEffect(() => {
    if (isError) {
      setIsError(false);

      if (errorCondition) {
        if (errorAction) errorAction();
        if (errorToast && (message || errorMessage))
          toast.error(errorMessage || message);
      }

      setMessage("");
    }

    if (isSuccess) {
      setIsSuccess(false);

      if (successCondition) {
        if (successAction) successAction();
        if (successToast && (message || successMessage))
          toast.success(successMessage || message);
      }

      setMessage("");
    }
  }, [
    isError,
    isSuccess,
    message,
    errorCondition,
    successCondition,
    errorAction,
    successAction,
    errorToast,
    errorMessage,
    successToast,
    successMessage,
    setIsError,
    setIsSuccess,
    setMessage,
  ]);
};

export default useHandleResponseEffect;
