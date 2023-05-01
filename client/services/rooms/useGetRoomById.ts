import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { ROOMS_ROUTE, ROOMS_SINGULAR } from "../../config/constants";

const useGetRoomById = (responseOptions: IHandleResponseOptions) => {
  const { setRoom } = useContext(RoomsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getRoomById = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${id}`,
        setState: setRoom,
      });
    },
    [executeRequest, setRoom]
  );

  return { getRoomById, isError, isSuccess, isLoading, message };
};

export default useGetRoomById;
