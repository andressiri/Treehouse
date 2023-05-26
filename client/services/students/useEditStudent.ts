import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { EDIT, STUDENTS_ROUTE } from "../../config/constants";

interface IFormData {
  name?: string;
  age?: string;
  gender?: string;
  description?: string;
  roomId?: string;
}

const useEditStudent = (responseOptions: IHandleResponseOptions) => {
  const { setStudent } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const editStudent = useCallback(
    (formData: IFormData, id: number) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}/${EDIT}/${id}`,
        data: formData,
        method: "PUT",
        setState: setStudent,
        type: "withImage",
      });
    },
    [executeRequest, setStudent]
  );

  return { editStudent, isError, isSuccess, isLoading, message };
};

export default useEditStudent;
