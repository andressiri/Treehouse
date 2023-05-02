import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useGetStudentById from "./useGetStudentById";
import { IHandleResponseOptions } from "../../typings/services";

const useGetStudentByIdEffect = (responseOptions: IHandleResponseOptions) => {
  const { isReady, query, push } = useRouter();
  const getStudentByIdEffectObj = useGetStudentById(responseOptions);
  const { getStudentById } = getStudentByIdEffectObj;

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      toast.error("Invalid student id");
      push("/404");
      return;
    }

    getStudentById(Number(query.id));
  }, [getStudentById, isReady, query, push]);

  return getStudentByIdEffectObj;
};

export default useGetStudentByIdEffect;
