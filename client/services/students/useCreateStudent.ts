import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { STUDENTS_ROUTE } from "../../config/constants";

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description?: string;
  roomId?: string;
}

const useCreateStudent = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const createStudent = useCallback(
    async (formData: IFormData) => {
      await serviceInstance({
        route: `/${STUDENTS_ROUTE}`,
        method: "POST",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setStudent,
        formData,
        sanitizeData: true,
      });
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { createStudent };
};

export default useCreateStudent;
