import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import {
  STUDENTS_ROUTE,
  STUDENTS_HANDLE_SIBLINGS,
} from "../../config/constants";

interface IFormData {
  siblingId: string;
  addToOtherSiblings?: boolean;
}

const useRemoveSibling = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const removeSibling = useCallback(
    async (formData: IFormData, id: number) => {
      await serviceInstance({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_HANDLE_SIBLINGS}/${id}`,
        method: "DELETE",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setStudent,
        formData,
        sanitizeData: true,
      });
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { removeSibling };
};

export default useRemoveSibling;
