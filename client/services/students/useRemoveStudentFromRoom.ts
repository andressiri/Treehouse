import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { STUDENTS_HANDLE_ROOM, STUDENTS_ROUTE } from "../../config/constants";

const useRemoveStudentFromRoom = (responseOptions: IHandleResponseOptions) => {
  const { setStudent } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const removeStudentFromRoom = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_HANDLE_ROOM}/${id}`,
        method: "DELETE",
        setState: setStudent,
      });
    },
    [executeRequest, setStudent]
  );

  return { removeStudentFromRoom, isError, isSuccess, isLoading, message };
};

export default useRemoveStudentFromRoom;
