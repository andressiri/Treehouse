import { useCallback, useContext, useEffect } from "react";
import { RoomsContext } from "../../contexts";
import { useRouter } from "next/router";
import { axiosInstance } from "../../utils/helpers";

const useGetRoomById = () => {
  const { setRoom, setIsError, setIsLoading, setMessage } =
    useContext(RoomsContext);
  const { isReady, query } = useRouter();

  const getRoomById = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        const room = await axiosInstance(`/rooms/room/${id}`);
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

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      console.log(query.id);
      console.log(!Number.isInteger(query.id));
      setIsError(true);
      setMessage("That is an invalid id");
      return;
    }

    getRoomById(Number(query.id));
  }, [isReady, query, getRoomById, setIsError, setMessage]);

  return { getRoomById };
};

export default useGetRoomById;
