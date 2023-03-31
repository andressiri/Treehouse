import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

const useGetStudentsWithRelations = () => {
  const { setStudents, setIsError, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const getStudentsWithRelations = useCallback(async () => {
    setIsLoading(true);
    try {
      const studentsData = await axiosInstance("/students/all");
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
