import { useEffect } from "react";
import useGetRoomsWithRelations from "./useGetRoomsWithRelations";

const useGetRoomsWithRelationsEffect = () => {
  const { getRoomsWithRelations } = useGetRoomsWithRelations();

  useEffect(() => {
    getRoomsWithRelations();
  }, [getRoomsWithRelations]);
};

export default useGetRoomsWithRelationsEffect;
