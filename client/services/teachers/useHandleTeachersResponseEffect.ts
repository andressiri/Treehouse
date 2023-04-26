import { useContext, useEffect } from "react";
import { TeachersContext } from "../../contexts";
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

const useHandleTeachersResponseEffect = ({
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
    useContext(TeachersContext);

  useEffect(() => {
    if (errorCondition && isError) {
      if (errorAction) errorAction();
      if (errorToast && (message || errorMessage))
        toast.error(errorMessage || message);
      setMessage("");
      setIsError(false);
    }

    if (successCondition && isSuccess) {
      if (successAction) successAction();
      if (successToast && (message || successMessage))
        toast.success(successMessage || message);
      setMessage("");
      setIsSuccess(false);
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

export default useHandleTeachersResponseEffect;
