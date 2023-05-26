import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { TEACHERS_ROUTE } from "../../config/constants";

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description?: string;
}

const useCreateTeacher = (responseOptions: IHandleResponseOptions) => {
  const { setTeacher } = useContext(TeachersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const createTeacher = useCallback(
    (formData: IFormData) => {
      executeRequest({
        route: `/${TEACHERS_ROUTE}`,
        data: formData,
        method: "POST",
        setState: setTeacher,
        type: "withImage",
      });
    },
    [executeRequest, setTeacher]
  );

  return { createTeacher, isError, isSuccess, isLoading, message };
};

export default useCreateTeacher;
