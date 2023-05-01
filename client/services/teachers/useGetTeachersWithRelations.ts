import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { WITH_RELATIONS, TEACHERS_ROUTE } from "../../config/constants";

const useGetTeachersWithRelations = (
  responseOptions: IHandleResponseOptions
) => {
  const { setTeachersWithRelations } = useContext(TeachersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getTeachersWithRelations = useCallback(() => {
    executeRequest({
      route: `/${TEACHERS_ROUTE}/${WITH_RELATIONS}`,
      setState: setTeachersWithRelations,
    });
  }, [executeRequest, setTeachersWithRelations]);

  return { getTeachersWithRelations, isError, isSuccess, isLoading, message };
};

export default useGetTeachersWithRelations;
