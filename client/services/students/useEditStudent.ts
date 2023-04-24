import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { EDIT, STUDENTS_ROUTE } from "../../config/constants";

interface IFormData {
  name?: string;
  age?: string;
  gender?: string;
  description?: string;
  roomId?: string;
}

const useEditStudent = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const editStudent = useCallback(
    async (formData: IFormData, id: number) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/${STUDENTS_ROUTE}/${EDIT}/${id}`,
          formData,
          "PUT"
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

  return { editStudent };
};

export default useEditStudent;
