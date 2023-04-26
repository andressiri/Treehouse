import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { STUDENTS_HANDLE_ROOM, STUDENTS_ROUTE } from "../../config/constants";

const useRemoveStudentFromRoom = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const removeStudentFromRoom = useCallback(
    (id: number) => {
      serviceInstance({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_HANDLE_ROOM}/${id}`,
        method: "DELETE",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setStudent,
      });
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { removeStudentFromRoom };
};

export default useRemoveStudentFromRoom;
