import { FC } from "react";
import {
  RoomCardDescription,
  DisplayImage,
  RoomCardTitle,
} from "../../Molecules";
import { Container, InfoContainer } from "./styledComponents";

interface Props {
  name: string;
  roomId: number;
  teacherName?: string;
  image: string;
  description: string;
}

const DisplayCard: FC<Props> = ({
  name,
  roomId,
  teacherName,
  image,
  description,
}) => {
  return (
    <Container>
      <RoomCardTitle title={name} roomId={roomId} />
      <InfoContainer>
        <DisplayImage imageSrc={image} name={teacherName} />
        <RoomCardDescription description={description} roomId={roomId} />
      </InfoContainer>
    </Container>
  );
};

export default DisplayCard;
