import { useEffect } from "react";
import useGetStudents from "./useGetStudents";
import { IHandleResponseOptions } from "../../typings/services";

const useGetStudentsEffect = (responseOptions: IHandleResponseOptions) => {
  const getStudentsObj = useGetStudents(responseOptions);
  const { getStudents } = getStudentsObj;

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  return getStudentsObj;
};

export default useGetStudentsEffect;
