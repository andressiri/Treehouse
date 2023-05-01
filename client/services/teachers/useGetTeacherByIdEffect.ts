import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useGetTeacherById from "./useGetTeacherById";
import { IHandleResponseOptions } from "../../typings/services";

const useGetTeacherByIdEffect = (responseOptions: IHandleResponseOptions) => {
  const { isReady, query, push } = useRouter();
  const getTeacherByIdObj = useGetTeacherById(responseOptions);
  const { getTeacherById } = getTeacherByIdObj;

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      toast.error("Invalid teacher id");
      push("/404");
      return;
    }

    getTeacherById(Number(query.id));
  }, [getTeacherById, isReady, query, push]);

  return getTeacherByIdObj;
};

export default useGetTeacherByIdEffect;
