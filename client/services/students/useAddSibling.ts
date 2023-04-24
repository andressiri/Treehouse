import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import {
  STUDENTS_HANDLE_SIBLINGS,
  STUDENTS_ROUTE,
} from "../../config/constants";

interface IFormData {
  siblingId: string;
  addToOtherSiblings?: boolean;
}

const useAddSibling = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const addSibling = useCallback(
    async (formData: IFormData, id: number) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/${STUDENTS_ROUTE}/${STUDENTS_HANDLE_SIBLINGS}/${id}`,
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

  return { addSibling };
};

export default useAddSibling;
