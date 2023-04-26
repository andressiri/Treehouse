import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { ROOMS_ROUTE, WITH_RELATIONS } from "../../config/constants";

const useGetRoomsWithRelations = () => {
  const { setRooms, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const getRoomsWithRelations = useCallback(async () => {
    serviceInstance({
      route: `/${ROOMS_ROUTE}/${WITH_RELATIONS}`,
      context: { setIsError, setIsSuccess, setIsLoading, setMessage },
      setState: setRooms,
    });
  }, [setRooms, setIsError, setIsSuccess, setIsLoading, setMessage]);

  return { getRoomsWithRelations };
};

export default useGetRoomsWithRelations;
