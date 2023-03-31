import React, { createContext, FC, useState } from "react";

interface IContext {
  students: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  setStudents: React.Dispatch<React.SetStateAction<never[]>>;
  student: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  setStudent: React.Dispatch<React.SetStateAction<object>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const StudentsContext = createContext<IContext>({
  students: [],
  setStudents: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  student: {},
  setStudent: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  isError: false,
  setIsError: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  isSuccess: false,
  setIsSuccess: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  isLoading: false,
  setIsLoading: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  message: "",
  setMessage: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});

interface Props {
  children: React.ReactNode;
}

export const StudentsContextProvider: FC<Props> = ({ children }) => {
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
