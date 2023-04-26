import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { STUDENTS_ROUTE, STUDENTS_SINGULAR } from "../../config/constants";

const useGetStudentById = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const getStudentById = useCallback(
    async (id: number) => {
      await serviceInstance({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${id}`,
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setStudent,
      });
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { getStudentById };
};

export default useGetStudentById;
