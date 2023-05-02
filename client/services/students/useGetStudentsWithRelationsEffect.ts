import { useEffect } from "react";
import useGetStudentsWithRelations from "./useGetStudentsWithRelations";
import { IHandleResponseOptions } from "../../typings/services";

const useGetStudentsWithRelationsEffect = (
  responseOptions: IHandleResponseOptions
) => {
  const getStudentsWithRelationsObj =
    useGetStudentsWithRelations(responseOptions);
  const { getStudentsWithRelations } = getStudentsWithRelationsObj;

  useEffect(() => {
    getStudentsWithRelations();
  }, [getStudentsWithRelations]);

  return getStudentsWithRelationsObj;
};

export default useGetStudentsWithRelationsEffect;
