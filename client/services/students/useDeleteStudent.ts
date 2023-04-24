import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { DELETION, STUDENTS_ROUTE } from "../../config/constants";

const useDeleteStudent = () => {
  const { setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const deleteStudent = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        await axiosInstance(
          `/${STUDENTS_ROUTE}/${DELETION}/${id}`,
          {},
          "DELETE"
        );
        setIsSuccess(true);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { deleteStudent };
};

export default useDeleteStudent;
