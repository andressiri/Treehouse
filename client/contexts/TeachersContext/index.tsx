import React, { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  ITeachersContext,
} from "../../typings/contexts";
import { serviceContextInitialValues } from "../../config/constants";

export const TeachersContext = createContext<ITeachersContext>({
  teachers: [],
  setTeachers: () => [],
  teacher: {},
  setTeacher: () => {
    return {};
  },
  ...serviceContextInitialValues,
});

export const TeachersContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
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
