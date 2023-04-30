import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { ROOMS_ROUTE } from "../../config/constants";

interface IFormData {
  name: string;
  description?: string;
}

const useCreateRoom = (responseOptions: IHandleResponseOptions) => {
  const { setRoom } = useContext(RoomsContext);
  const { excecuteRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const createRoom = useCallback(
    (formData: IFormData) => {
      excecuteRequest({
        route: `/${ROOMS_ROUTE}`,
        method: "POST",
        setState: setRoom,
        formData,
        sanitizeData: true,
      });
    },
    [excecuteRequest, setRoom]
  );

  return {
    createRoom,
    isError,
    isSuccess,
    isLoading,
    message,
  };
};

export default useCreateRoom;
