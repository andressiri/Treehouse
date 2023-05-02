import React, { useCallback, useState } from "react";
import { axiosInstance, sanitizeRequestData } from "../../../utils/helpers";
import { EntitiesState /* SetServiceState */ } from "../../../typings/contexts";
import { IHandleResponseOptions } from "../../../typings/services";
import useHandleResponseEffect from "../useHandleResponseEffect";

interface ExecuteProps {
  route: string;
  method?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState?: React.Dispatch<React.SetStateAction<any>>; // Using SetServiceState would result in the error TS2590: Expression produces a union type that is too complex to represent.
  formData?: object;
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

  const executeRequest = useCallback(
    async ({ route, method, setState, formData }: ExecuteProps) => {
      const notGetRequest = method && method !== "GET";
      setIsLoading(true);

      try {
        const data = formData ? sanitizeRequestData(formData) : undefined;

        const response = await axiosInstance(route, data, method || "GET");

        if (setState) {
          const dataToSet: EntitiesState = notGetRequest
            ? response.data
            : response;
          setState(dataToSet);
        }

        if (notGetRequest) setMessage(response.message);
        setIsSuccess(true);
      } catch (err) {
        setMessage(`${err}`);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading]
  );

  return {
    executeRequest,
    isError,
    isSuccess,
    isLoading,
    message,
  };
};

export default useServiceInstance;
