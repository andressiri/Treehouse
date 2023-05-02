import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { TEACHERS_ROUTE } from "../../config/constants";

const useGetTeachers = (responseOptions: IHandleResponseOptions) => {
  const { setTeachers } = useContext(TeachersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getTeachers = useCallback(() => {
    executeRequest({
      route: `/${TEACHERS_ROUTE}`,
      setState: setTeachers,
    });
  }, [executeRequest, setTeachers]);

  return { getTeachers, isError, isSuccess, isLoading, message };
};

export default useGetTeachers;
