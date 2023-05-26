import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { EDIT, TEACHERS_ROUTE } from "../../config/constants";

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description?: string;
}

const useEditTeacher = (responseOptions: IHandleResponseOptions) => {
  const { setTeacher } = useContext(TeachersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const editTeacher = useCallback(
    (formData: IFormData, id: number) => {
      executeRequest({
        route: `/${TEACHERS_ROUTE}/${EDIT}/${id}`,
        data: formData,
        method: "PUT",
        setState: setTeacher,
        type: "withImage",
      });
    },
    [executeRequest, setTeacher]
  );

  return { editTeacher, isError, isSuccess, isLoading, message };
};

export default useEditTeacher;
