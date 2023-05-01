import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { DELETION, STUDENTS_ROUTE } from "../../config/constants";

const useDeleteStudent = (responseOptions: IHandleResponseOptions) => {
  const { setStudent } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const deleteStudent = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}/${DELETION}/${id}`,
        method: "DELETE",
        setState: setStudent,
      });
    },
    [executeRequest, setStudent]
  );

  return { deleteStudent, isError, isSuccess, isLoading, message };
};

export default useDeleteStudent;
