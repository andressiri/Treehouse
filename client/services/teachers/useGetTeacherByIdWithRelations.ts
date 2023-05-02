import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import {
  WITH_RELATIONS,
  TEACHERS_ROUTE,
  TEACHERS_SINGULAR,
} from "../../config/constants";

const useGetTeacherByIdWithRelations = (
  responseOptions: IHandleResponseOptions
) => {
  const { setTeacherWithRelations } = useContext(TeachersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getTeacherByIdWithRelations = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${TEACHERS_ROUTE}/${TEACHERS_SINGULAR}/${WITH_RELATIONS}/${id}`,
        setState: setTeacherWithRelations,
      });
    },
    [executeRequest, setTeacherWithRelations]
  );

  return {
    getTeacherByIdWithRelations,
    isError,
    isSuccess,
    isLoading,
    message,
  };
};

export default useGetTeacherByIdWithRelations;
