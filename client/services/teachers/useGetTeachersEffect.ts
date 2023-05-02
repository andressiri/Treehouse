import { useEffect } from "react";
import useGetTeachers from "./useGetTeachers";
import { IHandleResponseOptions } from "../../typings/services";

const useGetTeachersEffect = (responseOptions: IHandleResponseOptions) => {
  const getTeachersObj = useGetTeachers(responseOptions);
  const { getTeachers } = getTeachersObj;

  useEffect(() => {
    getTeachers();
  }, [getTeachers]);

  return getTeachersObj;
};

export default useGetTeachersEffect;
