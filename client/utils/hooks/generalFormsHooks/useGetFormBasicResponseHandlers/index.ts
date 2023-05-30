import { useContext, useState } from "react";
import {
  RoomsContext,
  StudentsContext,
  TeachersContext,
} from "../../../../contexts";
import { useRouter } from "next/router";
import { Entities } from "../../../../typings/global";
import { IRoom } from "../../../../typings/rooms";
import { IStudent } from "../../../../typings/students";
import { ITeacher, ITeacherWithRelations } from "../../../../typings/teachers";
import {
  ROOMS_ROUTE,
  ROOMS_SINGULAR,
  ROOM_ENTITY,
  STUDENTS_ROUTE,
  STUDENTS_SINGULAR,
  STUDENT_ENTITY,
  TEACHERS_ROUTE,
  TEACHERS_SINGULAR,
} from "../../../../config/constants";

const useGetFormBasicResponseHandlers = (entity: Entities) => {
  const { room } = useContext(RoomsContext);
  const { student } = useContext(StudentsContext);
  const { teacher, teacherWithRelations } = useContext(TeachersContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [keepLoading, setKeepLoading] = useState(false);
  const { push } = useRouter();

  const route =
    entity === ROOM_ENTITY
      ? `/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${(room as IRoom)?.id}`
      : entity === STUDENT_ENTITY
      ? `/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${(student as IStudent)?.id}`
      : `/${TEACHERS_ROUTE}/${TEACHERS_SINGULAR}/${
          (teacher as ITeacher)?.id
            ? (teacher as ITeacher)?.id
            : (teacherWithRelations as ITeacherWithRelations)?.id
        }`;

  const errorAction = (message: string) => {
    setErrorMessage(message);
    setKeepLoading(false);
  };

  const successAction = () => push(route);

  return {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
    keepLoading,
    setKeepLoading,
  };
};

export default useGetFormBasicResponseHandlers;
