import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { DELETION, TEACHERS_ROUTE } from "../../config/constants";

const useDeleteTeacher = (responseOptions: IHandleResponseOptions) => {
  const { setTeacher } = useContext(TeachersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const deleteTeacher = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${TEACHERS_ROUTE}/${DELETION}/${id}`,
        method: "DELETE",
        setState: setTeacher,
      });
    },
    [executeRequest, setTeacher]
  );

  return { deleteTeacher, isError, isSuccess, isLoading, message };
};

export default useDeleteTeacher;
