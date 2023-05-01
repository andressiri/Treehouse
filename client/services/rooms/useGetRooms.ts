import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { ROOMS_ROUTE } from "../../config/constants";

const useGetRooms = (responseOptions: IHandleResponseOptions) => {
  const { setRooms } = useContext(RoomsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getRooms = useCallback(() => {
    executeRequest({
      route: `/${ROOMS_ROUTE}`,
      setState: setRooms,
    });
  }, [executeRequest, setRooms]);

  return { getRooms, isError, isSuccess, isLoading, message };
};

export default useGetRooms;
