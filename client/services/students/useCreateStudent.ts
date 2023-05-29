import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { IPersonFormData } from "../../typings/persons";
import { STUDENTS_ROUTE } from "../../config/constants";

const useCreateStudent = (responseOptions: IHandleResponseOptions) => {
  const { setStudent } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const createStudent = useCallback(
    (formData: IPersonFormData) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}`,
        data: formData,
        method: "POST",
        setState: setStudent,
        type: "withImage",
      });
    },
    [executeRequest, setStudent]
  );

  return { createStudent, isError, isSuccess, isLoading, message };
};

export default useCreateStudent;
