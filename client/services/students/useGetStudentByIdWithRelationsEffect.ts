import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useGetStudentByIdWithRelations from "./useGetStudentByIdWithRelations";
import { IHandleResponseOptions } from "../../typings/services";

const useGetStudentByIdWithRelationsEffect = (
  responseOptions: IHandleResponseOptions
) => {
  const { isReady, query, push } = useRouter();
  const getStudentByIdWithRelationsObj =
    useGetStudentByIdWithRelations(responseOptions);
  const { getStudentByIdWithRelations } = getStudentByIdWithRelationsObj;

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      toast.error("Invalid student id");
      push("/404");
      return;
    }

    getStudentByIdWithRelations(Number(query.id));
  }, [getStudentByIdWithRelations, isReady, query, push]);

  return getStudentByIdWithRelationsObj;
};

export default useGetStudentByIdWithRelationsEffect;
