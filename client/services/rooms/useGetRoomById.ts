import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { ROOMS_ROUTE, ROOMS_SINGULAR } from "../../config/constants";

const useGetRoomById = () => {
  const { setRoom, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const getRoomById = useCallback(
    async (id: number) => {
      serviceInstance({
        route: `/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${id}`,
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setRoom,
      });
    },
    [setRoom, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { getRoomById };
};

export default useGetRoomById;
