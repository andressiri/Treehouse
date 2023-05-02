import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { STUDENTS_ROUTE, STUDENTS_SINGULAR } from "../../config/constants";

const useGetStudentById = (responseOptions: IHandleResponseOptions) => {
  const { setStudent } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getStudentById = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${id}`,
        setState: setStudent,
      });
    },
    [executeRequest, setStudent]
  );

  return { getStudentById, isError, isSuccess, isLoading, message };
};

export default useGetStudentById;
