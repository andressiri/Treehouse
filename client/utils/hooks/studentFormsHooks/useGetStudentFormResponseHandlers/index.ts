import { useContext, useState } from "react";
import { StudentsContext } from "../../../../contexts";
import { useRouter } from "next/router";
import { IStudent } from "../../../../typings/students";
import {
  STUDENTS_ROUTE,
  STUDENTS_SINGULAR,
} from "../../../../config/constants";

const useGetStudentFormResponseHandlers = () => {
  const { student } = useContext(StudentsContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { push } = useRouter();

  const errorAction = (message: string) => setErrorMessage(message);

  const successAction = () =>
    push(
      `/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${(student as IStudent)?.id}`
    );

  return {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
  };
};

export default useGetStudentFormResponseHandlers;
