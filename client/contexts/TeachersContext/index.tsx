import React, { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  ITeachersContext,
} from "../../typings/contexts";
import { ITeacher, ITeacherWithRelations } from "../../typings/teachers";
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
  const [teachers, setTeachers] = useState<
    ITeacher[] | ITeacherWithRelations[] | []
  >([]);
  const [teacher, setTeacher] = useState<
    ITeacher | ITeacherWithRelations | object
  >({});
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

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
