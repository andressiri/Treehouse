import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
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
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/${TEACHERS_ROUTE}`,
          formData,
          "POST"
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

  return { createTeacher };
};

export default useCreateTeacher;
