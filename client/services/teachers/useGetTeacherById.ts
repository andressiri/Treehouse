import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { TEACHERS_ROUTE, TEACHERS_SINGULAR } from "../../config/constants";

const useGetTeacherById = (responseOptions: IHandleResponseOptions) => {
  const { setTeacher } = useContext(TeachersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getTeacherById = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${TEACHERS_ROUTE}/${TEACHERS_SINGULAR}/${id}`,
        setState: setTeacher,
      });
    },
    [executeRequest, setTeacher]
  );

  return { getTeacherById, isError, isSuccess, isLoading, message };
};

export default useGetTeacherById;
