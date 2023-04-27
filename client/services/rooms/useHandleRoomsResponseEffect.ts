import { useContext, useEffect } from "react";
import { RoomsContext } from "../../contexts";
import { toast } from "react-toastify";

interface Props {
  errorCondition?: boolean;
  successCondition?: boolean;
  errorAction?: () => void;
  successAction?: () => void;
  errorToast?: boolean;
  errorMessage?: string;
  successToast?: boolean;
  successMessage?: string;
}

const useHandleRoomsResponseEffect = ({
  errorCondition = true,
  successCondition = true,
  errorAction,
  successAction,
  errorToast,
  errorMessage,
  successToast,
  successMessage,
}: Props) => {
  const { isError, setIsError, isSuccess, setIsSuccess, message, setMessage } =
    useContext(RoomsContext);

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

export default useHandleRoomsResponseEffect;
