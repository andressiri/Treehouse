import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { DELETION, TEACHERS_ROUTE } from "../../config/constants";

const useDeleteTeacher = () => {
  const { setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const deleteTeacher = useCallback(
    async (id: number) => {
      await serviceInstance({
        route: `/${TEACHERS_ROUTE}/${DELETION}/${id}`,
        method: "DELETE",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setTeacher,
      });
    },
    [setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { deleteTeacher };
};

export default useDeleteTeacher;
