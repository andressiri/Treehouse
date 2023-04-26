import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { DELETION, ROOMS_ROUTE } from "../../config/constants";

const useDeleteRoom = () => {
  const { setRoom, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const deleteRoom = useCallback(
    async (id: number) => {
      await serviceInstance({
        route: `/${ROOMS_ROUTE}/${DELETION}/${id}`,
        method: "DELETE",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setRoom,
      });
    },
    [setRoom, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { deleteRoom };
};

export default useDeleteRoom;
