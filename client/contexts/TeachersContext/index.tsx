import React, { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  ITeachersContext,
  Teachers,
  TeachersWithRelations,
  Teacher,
  TeacherWithRelations,
} from "../../typings/contexts";

export const TeachersContext = createContext<ITeachersContext>({
  teachers: [],
  setTeachers: () => [],
  teachersWithRelations: [],
  setTeachersWithRelations: () => [],
  teacher: {},
  setTeacher: () => {
    return {};
  },
  teacherWithRelations: {},
  setTeacherWithRelations: () => {
    return {};
  },
});

export const TeachersContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const [teachers, setTeachers] = useState<Teachers>([]);
  const [teachersWithRelations, setTeachersWithRelations] =
    useState<TeachersWithRelations>([]);
  const [teacher, setTeacher] = useState<Teacher>({});
  const [teacherWithRelations, setTeacherWithRelations] =
    useState<TeacherWithRelations>({});

  return (
    <TeachersContext.Provider
      value={{
        teachers,
        setTeachers,
        teachersWithRelations,
        setTeachersWithRelations,
        teacher,
        setTeacher,
        teacherWithRelations,
        setTeacherWithRelations,
      }}
    >
      {children}
    </TeachersContext.Provider>
  );
};
