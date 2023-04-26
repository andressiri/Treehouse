import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { EDIT, TEACHERS_ROUTE } from "../../config/constants";

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description?: string;
  roomId?: string;
}

const useEditTeacher = () => {
  const { setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const editTeacher = useCallback(
    async (formData: IFormData, id: number) => {
      await serviceInstance({
        route: `/${TEACHERS_ROUTE}/${EDIT}/${id}`,
        method: "PUT",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setTeacher,
        formData,
        sanitizeData: true,
      });
    },
    [setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { editTeacher };
};

export default useEditTeacher;
