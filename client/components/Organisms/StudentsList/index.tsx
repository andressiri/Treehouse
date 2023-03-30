import { FC } from "react";
import { StudentListItem } from "../../../components/Molecules";
import { Container } from "./styledComponents";

interface Props {
  studentsArray: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
}
const StudentsList: FC<Props> = ({ studentsArray }) => {
  return (
    <Container>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {studentsArray.map((student: any, id: number) => {
        return (
          <StudentListItem
            id={student.id}
            name={student.name}
            key={`${student.name}${id}`}
          />
        );
      })}
    </Container>
  );
};

export default StudentsList;
