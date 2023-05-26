import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { IRoomFormData } from "../../typings/rooms";
import { ROOMS_ROUTE } from "../../config/constants";

const useCreateRoom = (responseOptions: IHandleResponseOptions) => {
  const { setRoom } = useContext(RoomsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const createRoom = useCallback(
    (formData: IRoomFormData) => {
      executeRequest({
        route: `/${ROOMS_ROUTE}`,
        data: formData,
        method: "POST",
        setState: setRoom,
      });
    },
    [executeRequest, setRoom]
  );

  return { createRoom, isError, isSuccess, isLoading, message };
};

export default useCreateRoom;
