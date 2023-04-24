import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { WITH_RELATIONS, STUDENTS_ROUTE } from "../../config/constants";

const useGetStudentsWithRelations = () => {
  const { setStudents, setIsError, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const getStudentsWithRelations = useCallback(async () => {
    setIsLoading(true);
    try {
      const studentsData = await axiosInstance(
        `/${STUDENTS_ROUTE}/${WITH_RELATIONS}`
      );
      setStudents(studentsData);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setMessage(`${err}`);
      setIsLoading(false);
    }
  }, [setStudents, setIsError, setIsLoading, setMessage]);

  return { getStudentsWithRelations };
};

export default useGetStudentsWithRelations;
