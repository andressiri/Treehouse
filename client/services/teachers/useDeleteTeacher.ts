import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { DELETION, TEACHERS_ROUTE } from "../../config/constants";

const useDeleteTeacher = () => {
  const { setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const deleteTeacher = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        await axiosInstance(
          `/${TEACHERS_ROUTE}/${DELETION}/${id}`,
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

  return { deleteTeacher };
};

export default useDeleteTeacher;
