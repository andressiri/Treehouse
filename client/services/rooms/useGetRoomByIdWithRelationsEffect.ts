import { useEffect } from "react";
import { useRouter } from "next/router";
import useGetRoomByIdWithRelations from "./useGetRoomByIdWithRelations";
import { IHandleResponseOptions } from "../../typings/services";
import { toast } from "react-toastify";

const useGetRoomByIdWithRelationsEffect = (
  responseOptions: IHandleResponseOptions
) => {
  const { isReady, query, push } = useRouter();
  const getRoomByIdWithRelationsObj =
    useGetRoomByIdWithRelations(responseOptions);
  const { getRoomByIdWithRelations } = getRoomByIdWithRelationsObj;

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      toast.error("Invalid room id");
      push("/404");
      return;
    }

    getRoomByIdWithRelations(Number(query.id));
  }, [getRoomByIdWithRelations, isReady, query, push]);

  return getRoomByIdWithRelationsObj;
};

export default useGetRoomByIdWithRelationsEffect;
