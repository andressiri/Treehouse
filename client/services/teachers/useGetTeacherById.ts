import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

const useGetTeacherById = () => {
  const { setTeacher, setIsError, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const getTeacherById = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        const teacher = await axiosInstance(`/teachers/teacher/${id}`);
        setIsLoading(false);
        setTeacher(teacher);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setTeacher, setIsError, setIsLoading, setMessage]
  );

  return { getTeacherById };
};

export default useGetTeacherById;
