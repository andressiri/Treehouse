import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useGetTeacherByIdWithRelations from "./useGetTeacherByIdWithRelations";
import { IHandleResponseOptions } from "../../typings/services";

const useGetTeacherByIdWithRelationsEffect = (
  responseOptions: IHandleResponseOptions
) => {
  const { isReady, query, push } = useRouter();
  const getTeacherByIdWithRelationsObj =
    useGetTeacherByIdWithRelations(responseOptions);
  const { getTeacherByIdWithRelations } = getTeacherByIdWithRelationsObj;

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      toast.error("Invalid teacher id");
      push("/404");
      return;
    }

    getTeacherByIdWithRelations(Number(query.id));
  }, [getTeacherByIdWithRelations, isReady, query, push]);

  return getTeacherByIdWithRelationsObj;
};

export default useGetTeacherByIdWithRelationsEffect;
