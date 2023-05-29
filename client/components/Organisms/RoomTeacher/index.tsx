import { FC } from "react";
import {
  PersonBasicInfo,
  DisplayPersonImage,
} from "../../../components/Molecules";
import { Container, InfoContainer, Description } from "./styledComponents";
import { ITeacher } from "../../../typings/teachers";

type Teacher = Omit<ITeacher, "createAt" | "updatedAt">;
interface Props {
  teacher: Teacher;
}

const RoomTeacher: FC<Props> = ({ teacher }) => {
  return (
    <Container>
      <DisplayPersonImage imageSrc={teacher.picture} name={teacher.name} />
      <InfoContainer>
        <PersonBasicInfo age={teacher.age} gender={teacher.gender} />
        <Description>{teacher.description}</Description>
      </InfoContainer>
    </Container>
  );
};

export default RoomTeacher;
