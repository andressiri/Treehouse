import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { TEACHERS_ROUTE, TEACHERS_SINGULAR } from "../../config/constants";

const useGetTeacherById = () => {
  const { setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const getTeacherById = useCallback(
    async (id: number) => {
      await serviceInstance({
        route: `/${TEACHERS_ROUTE}/${TEACHERS_SINGULAR}/${id}`,
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setTeacher,
      });
    },
    [setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { getTeacherById };
};

export default useGetTeacherById;
