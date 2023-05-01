import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { STUDENTS_ROUTE } from "../../config/constants";

const useGetStudents = (responseOptions: IHandleResponseOptions) => {
  const { setStudents } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getStudents = useCallback(() => {
    executeRequest({
      route: `/${STUDENTS_ROUTE}`,
      setState: setStudents,
    });
  }, [executeRequest, setStudents]);

  return { getStudents, isError, isSuccess, isLoading, message };
};

export default useGetStudents;
