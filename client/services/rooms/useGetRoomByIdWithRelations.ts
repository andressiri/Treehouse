import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import {
  WITH_RELATIONS,
  ROOMS_ROUTE,
  ROOMS_SINGULAR,
} from "../../config/constants";

const useGetRoomByIdWithRelations = (
  responseOptions: IHandleResponseOptions
) => {
  const { setRoomWithRelations } = useContext(RoomsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getRoomByIdWithRelations = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${WITH_RELATIONS}/${id}`,
        setState: setRoomWithRelations,
      });
    },
    [executeRequest, setRoomWithRelations]
  );

  return { getRoomByIdWithRelations, isError, isSuccess, isLoading, message };
};

export default useGetRoomByIdWithRelations;
