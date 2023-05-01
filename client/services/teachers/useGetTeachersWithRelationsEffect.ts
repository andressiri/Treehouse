import { useEffect } from "react";
import useGetTeachersWithRelations from "./useGetTeachersWithRelations";
import { IHandleResponseOptions } from "../../typings/services";

const useGetTeachersWithRelationsEffect = (
  responseOptions: IHandleResponseOptions
) => {
  const getTeachersWithRelationsObj =
    useGetTeachersWithRelations(responseOptions);
  const { getTeachersWithRelations } = getTeachersWithRelationsObj;

  useEffect(() => {
    getTeachersWithRelations();
  }, [getTeachersWithRelations]);

  return getTeachersWithRelationsObj;
};

export default useGetTeachersWithRelationsEffect;
