import { useEffect } from "react";
import useGetStudentsWithRelations from "./useGetStudentsWithRelations";

const useGetStudentsWithRelationsEffect = () => {
  const { getStudentsWithRelations } = useGetStudentsWithRelations();

  useEffect(() => {
    getStudentsWithRelations();
  }, [getStudentsWithRelations]);

  return { getStudentsWithRelations };
};

export default useGetStudentsWithRelationsEffect;
