import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { DELETION, ROOMS_ROUTE } from "../../config/constants";

const useDeleteRoom = (responseOptions: IHandleResponseOptions) => {
  const { setRoom } = useContext(RoomsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const deleteRoom = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${ROOMS_ROUTE}/${DELETION}/${id}`,
        method: "DELETE",
        setState: setRoom,
      });
    },
    [executeRequest, setRoom]
  );

  return { deleteRoom, isError, isSuccess, isLoading, message };
};

export default useDeleteRoom;
