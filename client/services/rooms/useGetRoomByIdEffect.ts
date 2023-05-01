import { useEffect } from "react";
import { useRouter } from "next/router";
import useGetRoomById from "./useGetRoomById";
import { IHandleResponseOptions } from "../../typings/services";
import { toast } from "react-toastify";

const useGetRoomByIdEffect = (responseOptions: IHandleResponseOptions) => {
  const { isReady, query, push } = useRouter();
  const getRoomByIdObj = useGetRoomById(responseOptions);
  const { getRoomById } = getRoomByIdObj;

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      toast.error("Invalid room id");
      push("/404");
      return;
    }

    getRoomById(Number(query.id));
  }, [getRoomById, isReady, query, push]);

  return getRoomByIdObj;
};

export default useGetRoomByIdEffect;
