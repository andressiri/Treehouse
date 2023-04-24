import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
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
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/${STUDENTS_ROUTE}`,
          formData,
          "POST"
        );
        setStudent(response.studentData);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { createStudent };
};

export default useCreateStudent;
