import { useEffect } from "react";
import useGetRooms from "./useGetRooms";
import { IHandleResponseOptions } from "../../typings/services";

const useGetRoomsEffect = (responseOptions: IHandleResponseOptions) => {
  const getRoomsObj = useGetRooms(responseOptions);
  const { getRooms } = getRoomsObj;

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  return getRoomsObj;
};

export default useGetRoomsEffect;
