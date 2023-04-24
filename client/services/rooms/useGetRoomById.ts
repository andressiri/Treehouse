import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { ROOMS_ROUTE, ROOMS_SINGULAR } from "../../config/constants";

const useGetRoomById = () => {
  const { setRoom, setIsError, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const getRoomById = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        const room = await axiosInstance(
          `/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${id}`
        );
        setIsLoading(false);
        setRoom(room);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setRoom, setIsError, setIsLoading, setMessage]
  );

  return { getRoomById };
};

export default useGetRoomById;
