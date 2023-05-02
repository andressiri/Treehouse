import React, { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  IStudentsContext,
  Students,
  StudentsWithRelations,
  Student,
  StudentWithRelations,
} from "../../typings/contexts";

export const StudentsContext = createContext<IStudentsContext>({
  students: [],
  setStudents: () => [],
  studentsWithRelations: [],
  setStudentsWithRelations: () => [],
  student: {},
  setStudent: () => {
    return {};
  },
  studentWithRelations: {},
  setStudentWithRelations: () => {
    return {};
  },
});

export const StudentsContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const [students, setStudents] = useState<Students>([]);
  const [studentsWithRelations, setStudentsWithRelations] =
    useState<StudentsWithRelations>([]);
  const [student, setStudent] = useState<Student>({});
  const [studentWithRelations, setStudentWithRelations] =
    useState<StudentWithRelations>({});

  return (
    <StudentsContext.Provider
      value={{
        students,
        setStudents,
        studentsWithRelations,
        setStudentsWithRelations,
        student,
        setStudent,
        studentWithRelations,
        setStudentWithRelations,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};
