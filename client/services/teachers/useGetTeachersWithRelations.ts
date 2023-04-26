import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { WITH_RELATIONS, TEACHERS_ROUTE } from "../../config/constants";

const useGetTeachersWithRelations = () => {
  const { setTeachers, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const getTeachersWithRelations = useCallback(() => {
    serviceInstance({
      route: `/${TEACHERS_ROUTE}/${WITH_RELATIONS}`,
      context: { setIsError, setIsSuccess, setIsLoading, setMessage },
      setState: setTeachers,
    });
  }, [setTeachers, setIsError, setIsSuccess, setIsLoading, setMessage]);

  return { getTeachersWithRelations };
};

export default useGetTeachersWithRelations;
