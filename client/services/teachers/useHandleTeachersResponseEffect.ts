import { useContext, useEffect } from "react";
import { TeachersContext } from "../../contexts";
import { toast } from "react-toastify";

interface Props {
  errorAction?: () => void;
  successAction?: () => void;
  useToast?: boolean;
  toastMessage?: string;
}

const useHandleTeachersResponseEffect = ({
  errorAction,
  successAction,
  useToast,
  toastMessage,
}: Props) => {
  const { isError, setIsError, isSuccess, setIsSuccess, message, setMessage } =
    useContext(TeachersContext);

  useEffect(() => {
    if (isError) {
      if (errorAction) errorAction();
      if (useToast && (message || toastMessage))
        toast.error(toastMessage || message);
      setMessage("");
      setIsError(false);
    }

    if (isSuccess) {
      if (successAction) successAction();
      if (useToast && (message || toastMessage))
        toast.success(toastMessage || message);
      setMessage("");
      setIsSuccess(false);
    }
  }, [
    isError,
    isSuccess,
    message,
    errorAction,
    successAction,
    useToast,
    toastMessage,
    setIsError,
    setIsSuccess,
    setMessage,
  ]);
};

export default useHandleTeachersResponseEffect;
