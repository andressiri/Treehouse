import { useEffect } from "react";
import useGetTeachersWithRelations from "./useGetTeachersWithRelations";

const useGetTeachersWithRelationsEffect = () => {
  const { getTeachersWithRelations } = useGetTeachersWithRelations();

  useEffect(() => {
    getTeachersWithRelations();
  }, [getTeachersWithRelations]);
};

export default useGetTeachersWithRelationsEffect;
