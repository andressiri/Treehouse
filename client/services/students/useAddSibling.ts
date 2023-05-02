import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import {
  STUDENTS_HANDLE_SIBLINGS,
  STUDENTS_ROUTE,
} from "../../config/constants";

interface IFormData {
  siblingId: string;
  addToOtherSiblings?: boolean;
}

const useAddSibling = (responseOptions: IHandleResponseOptions) => {
  const { setStudentWithRelations } = useContext(StudentsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const addSibling = useCallback(
    (formData: IFormData, id: number) => {
      executeRequest({
        route: `/${STUDENTS_ROUTE}/${STUDENTS_HANDLE_SIBLINGS}/${id}`,
        method: "PUT",
        setState: setStudentWithRelations,
        formData,
      });
    },
    [executeRequest, setStudentWithRelations]
  );

  return { addSibling, isError, isSuccess, isLoading, message };
};

export default useAddSibling;
