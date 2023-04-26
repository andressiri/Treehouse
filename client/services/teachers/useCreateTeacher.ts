import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { TEACHERS_ROUTE } from "../../config/constants";

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description?: string;
  roomId?: string;
}

const useCreateTeacher = () => {
  const { setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const createTeacher = useCallback(
    async (formData: IFormData) => {
      await serviceInstance({
        route: `/${TEACHERS_ROUTE}`,
        method: "POST",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setTeacher,
        formData,
        sanitizeData: true,
      });
    },
    [setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { createTeacher };
};

export default useCreateTeacher;
