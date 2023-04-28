import React, { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  IStudentsContext,
} from "../../typings/contexts";
import { serviceContextInitialValues } from "../../config/constants";
import { IStudent, IStudentWithRelations } from "../../typings/students";

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
  const [students, setStudents] = useState<
    IStudent[] | IStudentWithRelations[] | []
  >([]);
  const [student, setStudent] = useState<
    IStudent | IStudentWithRelations | object
  >({});
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

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
