import { FC } from "react";
import {
  RoomCardDescription,
  RoomCardTeacher,
  RoomCardTitle,
} from "../../../components/Molecules";
import { Container, InfoContainer } from "./styledComponents";

interface Props {
  name: string;
  roomId: number;
  teacherName: string;
  teacherPicture: string;
  description: string;
}

const RoomCard: FC<Props> = ({
  name,
  roomId,
  teacherName,
  teacherPicture,
  description,
}) => {
  return (
    <Container>
      <RoomCardTitle title={name} roomId={roomId} />
      <InfoContainer>
        <RoomCardTeacher imageSrc={teacherPicture} name={teacherName} />
        <RoomCardDescription description={description} roomId={roomId} />
      </InfoContainer>
    </Container>
  );
};

export default RoomCard;
