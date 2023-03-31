import { FC } from "react";
import {
  PersonBasicInfo,
  RoomCardTeacher,
} from "../../../components/Molecules";
import { Container, InfoContainer, Description } from "./styledComponents";

interface Props {
  teacher: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RoomTeacher: FC<Props> = ({ teacher }) => {
  return (
    <Container>
      <RoomCardTeacher imageSrc={teacher.picture} name={teacher.name} />
      <InfoContainer>
        <PersonBasicInfo age={teacher.age} gender={teacher.gender} />
        <Description>{teacher.description}</Description>
      </InfoContainer>
    </Container>
  );
};

export default RoomTeacher;
