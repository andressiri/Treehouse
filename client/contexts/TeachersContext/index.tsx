import React, { createContext, FC, useState } from "react";

interface IContext {
  teachers: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  setTeachers: React.Dispatch<React.SetStateAction<never[]>>;
  teacher: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  setTeacher: React.Dispatch<React.SetStateAction<object>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const TeachersContext = createContext<IContext>({
  teachers: [],
  setTeachers: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  teacher: {},
  setTeacher: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
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

export const TeachersContextProvider: FC<Props> = ({ children }) => {
  const [teachers, setTeachers] = useState([]);
  const [teacher, setTeacher] = useState({});
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  return (
    <TeachersContext.Provider
      value={{
        teachers,
        setTeachers,
        teacher,
        setTeacher,
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
    </TeachersContext.Provider>
  );
};
