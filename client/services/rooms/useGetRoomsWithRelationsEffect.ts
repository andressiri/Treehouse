import { useEffect } from "react";
import useGetRoomsWithRelations from "./useGetRoomsWithRelations";
import { IHandleResponseOptions } from "../../typings/services";

const useGetRoomsWithRelationsEffect = (
  responseOptions: IHandleResponseOptions
) => {
  const getRoomsWithRelationsObj = useGetRoomsWithRelations(responseOptions);
  const { getRoomsWithRelations } = getRoomsWithRelationsObj;

  useEffect(() => {
    getRoomsWithRelations();
  }, [getRoomsWithRelations]);

  return getRoomsWithRelationsObj;
};

export default useGetRoomsWithRelationsEffect;
