import React, { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  IStudentsContext,
} from "../../typings/contexts";
import { serviceContextInitialValues } from "../../config/constants";

export const StudentsContext = createContext<IStudentsContext>({
  students: [],
  setStudents: () => [],
  student: {},
  setStudent: () => {
    return {};
  },
  ...serviceContextInitialValues,
});

export const StudentsContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  return (
    <StudentsContext.Provider
      value={{
        students,
        setStudents,
        student,
        setStudent,
        isError,
        setIsError,
        isSuccess,
        setIsSuccess,
        isLoading,
        setIsLoading,
        message,
        setMessage,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};
