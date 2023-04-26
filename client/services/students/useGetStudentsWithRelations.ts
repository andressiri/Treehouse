import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { WITH_RELATIONS, STUDENTS_ROUTE } from "../../config/constants";

const useGetStudentsWithRelations = () => {
  const { setStudents, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const getStudentsWithRelations = useCallback(async () => {
    await serviceInstance({
      route: `/${STUDENTS_ROUTE}/${WITH_RELATIONS}`,
      context: { setIsError, setIsSuccess, setIsLoading, setMessage },
      setState: setStudents,
    });
  }, [setStudents, setIsError, setIsSuccess, setIsLoading, setMessage]);

  return { getStudentsWithRelations };
};

export default useGetStudentsWithRelations;
