import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { ROOMS_ROUTE, WITH_RELATIONS } from "../../config/constants";

const useGetRoomsWithRelations = (responseOptions: IHandleResponseOptions) => {
  const { setRoomsWithRelations } = useContext(RoomsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getRoomsWithRelations = useCallback(() => {
    executeRequest({
      route: `/${ROOMS_ROUTE}/${WITH_RELATIONS}`,
      setState: setRoomsWithRelations,
    });
  }, [executeRequest, setRoomsWithRelations]);

  return { getRoomsWithRelations, isError, isSuccess, isLoading, message };
};

export default useGetRoomsWithRelations;
