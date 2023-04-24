import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { ROOMS_ROUTE, WITH_RELATIONS } from "../../config/constants";

const useGetRoomsWithRelations = () => {
  const { setRooms, setIsError, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const getRoomsWithRelations = useCallback(async () => {
    setIsLoading(true);
    try {
      const roomsData = await axiosInstance(
        `/${ROOMS_ROUTE}/${WITH_RELATIONS}`
      );
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
