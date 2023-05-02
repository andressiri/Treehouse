import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { WITH_RELATIONS, STUDENTS_ROUTE } from "../../config/constants";

const useGetStudentsWithRelations = (
  responseOptions: IHandleResponseOptions
) => {
  const { setStudentsWithRelations } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getStudentsWithRelations = useCallback(() => {
    executeRequest({
      route: `/${STUDENTS_ROUTE}/${WITH_RELATIONS}`,
      setState: setStudentsWithRelations,
    });
  }, [executeRequest, setStudentsWithRelations]);

  return { getStudentsWithRelations, isError, isSuccess, isLoading, message };
};

export default useGetStudentsWithRelations;
