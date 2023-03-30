import { FC } from "react";
import { SectionTitle } from "../../../components/Atoms";
import { RoomTeacher, StudentsList } from "../../../components/Organisms";
import {
  Container,
  Description,
  StudentsTitle,
  StudentsFallback,
} from "./styledComponents";

interface Props {
  room: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RoomPage: FC<Props> = ({ room }) => {
  return (
    <Container component="section">
      <SectionTitle>{room.name}</SectionTitle>
      <Description>{room.description}</Description>
      {room.Teacher ? <RoomTeacher teacher={room.Teacher} /> : <></>}
      <StudentsTitle>This are its students</StudentsTitle>
      {room.Students ? (
        <StudentsList studentsArray={room.Students} />
      ) : (
        <StudentsFallback>There are no students registered</StudentsFallback>
      )}
    </Container>
  );
};

export default RoomPage;
