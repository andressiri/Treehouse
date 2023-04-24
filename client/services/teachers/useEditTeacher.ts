import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
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
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/${TEACHERS_ROUTE}/${EDIT}/${id}`,
          formData,
          "PUT"
        );
        setTeacher(response.teacherData);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { editTeacher };
};

export default useEditTeacher;
