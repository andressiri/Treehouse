import { useState } from "react";
import { axiosInstance, sanitizeObject } from "../../../utils/helpers";
import { SetServiceState } from "../../../typings/contexts";
import { IHandleResponseOptions } from "../../../typings/services";
import useHandleResponseEffect from "../useHandleResponseEffect";

interface ExcecuteProps {
  route: string;
  method?: string;
  setState?: SetServiceState;
  formData?: object;
  sanitizeData?: boolean;
}

const useServiceInstance = (responseOptions: IHandleResponseOptions) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useHandleResponseEffect({
    ...responseOptions,
    serviceState: {
      isError,
      setIsError,
      isSuccess,
      setIsSuccess,
      message,
      setMessage,
    },
  });

  const excecuteRequest = async ({
    route,
    method,
    setState,
    formData,
    sanitizeData,
  }: ExcecuteProps) => {
    const notGetRequest = method && method !== "GET";
    setIsLoading(true);

    try {
      const data = sanitizeData ? sanitizeObject({ ...formData }) : formData;

      const response = await axiosInstance(route, data, method || "GET");

      if (setState) setState(notGetRequest ? response.data : response);
      if (notGetRequest) setMessage(response.message);
      setIsSuccess(true);
    } catch (err) {
      setMessage(`${err}`);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    excecuteRequest,
    isError,
    isSuccess,
    isLoading,
    message,
  };
};

export default useServiceInstance;