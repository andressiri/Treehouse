import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { EDIT, STUDENTS_ROUTE } from "../../config/constants";

interface IFormData {
  name?: string;
  age?: string;
  gender?: string;
  description?: string;
  roomId?: string;
}

const useEditStudent = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const editStudent = useCallback(
    (formData: IFormData, id: number) => {
      serviceInstance({
        route: `/${STUDENTS_ROUTE}/${EDIT}/${id}`,
        method: "PUT",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setStudent,
        formData,
        sanitizeData: true,
      });
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { editStudent };
};

export default useEditStudent;
