import { FC } from "react";
import { StudentListItem } from "../../../components/Molecules";
import { Container } from "./styledComponents";
import { AnyStudentArray } from "../../../typings/students";

interface Props {
  studentsArray: AnyStudentArray;
  listOf?: "siblings" | "students";
  studentId?: number;
}
const StudentsList: FC<Props> = ({ studentsArray, listOf, studentId }) => {
  return (
    <Container>
      {studentsArray.map((student, id) => {
        return (
          <StudentListItem
            id={student.id}
            name={student.name}
            listOf={listOf}
            studentId={studentId}
            key={`${student.name}${id}`}
          />
        );
      })}
    </Container>
  );
};

export default StudentsList;
