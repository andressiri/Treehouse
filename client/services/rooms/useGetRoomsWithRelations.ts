import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

const useGetRoomsWithRelations = () => {
  const { setRooms, setIsError, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const getRoomsWithRelations = useCallback(async () => {
    setIsLoading(true);
    try {
      const roomsData = await axiosInstance("/rooms/all");
      setRooms(roomsData);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setMessage(`${err}`);
      setIsLoading(false);
    }
  }, [setRooms, setIsError, setIsLoading, setMessage]);

  return { getRoomsWithRelations };
};

export default useGetRoomsWithRelations;
