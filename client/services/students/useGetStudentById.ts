import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { STUDENTS_ROUTE, STUDENTS_SINGULAR } from "../../config/constants";

const useGetStudentById = () => {
  const { setStudent, setIsError, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const getStudentById = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        const student = await axiosInstance(
          `/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${id}`
        );
        setIsLoading(false);
        setStudent(student);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setStudent, setIsError, setIsLoading, setMessage]
  );

  return { getStudentById };
};

export default useGetStudentById;
