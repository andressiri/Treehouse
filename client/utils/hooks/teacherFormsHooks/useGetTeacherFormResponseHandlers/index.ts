import { useContext, useState } from "react";
import { TeachersContext } from "../../../../contexts";
import { useRouter } from "next/router";
import { ITeacher } from "../../../../typings/teachers";
import {
  TEACHERS_ROUTE,
  TEACHERS_SINGULAR,
} from "../../../../config/constants";

const useGetTeacherFormResponseHandlers = () => {
  const { teacher } = useContext(TeachersContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { push } = useRouter();

  const errorAction = (message: string) => setErrorMessage(message);

  const successAction = () =>
    push(
      `/${TEACHERS_ROUTE}/${TEACHERS_SINGULAR}/${(teacher as ITeacher)?.id}`
    );

  return {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
  };
};

export default useGetTeacherFormResponseHandlers;
