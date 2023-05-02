import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import {
  WITH_RELATIONS,
  STUDENTS_ROUTE,
  STUDENTS_SINGULAR,
} from "../../config/constants";

const useGetStudentByIdWithRelations = (
  responseOptions: IHandleResponseOptions
) => {
  const { setStudentWithRelations } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getStudentByIdWithRelations = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${WITH_RELATIONS}/${id}`,
        setState: setStudentWithRelations,
      });
    },
    [executeRequest, setStudentWithRelations]
  );

  return {
    getStudentByIdWithRelations,
    isError,
    isSuccess,
    isLoading,
    message,
  };
};

export default useGetStudentByIdWithRelations;
