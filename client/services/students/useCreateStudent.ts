import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { STUDENTS_ROUTE } from "../../config/constants";

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description?: string;
  roomId?: string;
}

const useCreateStudent = (responseOptions: IHandleResponseOptions) => {
  const { setStudent } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const createStudent = useCallback(
    (formData: IFormData) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}`,
        method: "POST",
        setState: setStudent,
        formData,
      });
    },
    [executeRequest, setStudent]
  );

  return { createStudent, isError, isSuccess, isLoading, message };
};

export default useCreateStudent;
