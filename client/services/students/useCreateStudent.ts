import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

interface IFormData {
  name: string;
  description?: string;
}

const useCreateStudent = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const createStudent = useCallback(
    async (formData: IFormData) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance(`/students`, formData, "POST");
        console.log(response);
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
