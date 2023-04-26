import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
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
    (formData: IFormData, id: number) => {
      serviceInstance({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_HANDLE_SIBLINGS}/${id}`,
        method: "PUT",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setStudent,
        formData,
      });
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { addSibling };
};

export default useAddSibling;
