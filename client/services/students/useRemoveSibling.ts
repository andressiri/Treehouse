import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import {
  STUDENTS_ROUTE,
  STUDENTS_HANDLE_SIBLINGS,
} from "../../config/constants";

interface IFormData {
  siblingId: string;
  addToOtherSiblings?: boolean;
}

const useRemoveSibling = (responseOptions: IHandleResponseOptions) => {
  const { setStudent } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const removeSibling = useCallback(
    (formData: IFormData, id: number) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_HANDLE_SIBLINGS}/${id}`,
        method: "DELETE",
        setState: setStudent,
        formData,
      });
    },
    [executeRequest, setStudent]
  );

  return { removeSibling, isError, isSuccess, isLoading, message };
};

export default useRemoveSibling;
