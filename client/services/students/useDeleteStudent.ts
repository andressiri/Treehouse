import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { DELETION, STUDENTS_ROUTE } from "../../config/constants";

const useDeleteStudent = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const deleteStudent = useCallback(
    (id: number) => {
      serviceInstance({
        route: `/${STUDENTS_ROUTE}/${DELETION}/${id}`,
        method: "DELETE",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setStudent,
      });
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { deleteStudent };
};

export default useDeleteStudent;
