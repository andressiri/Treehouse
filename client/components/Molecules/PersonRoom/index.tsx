import { FC } from "react";
import { FallbackText } from "../../../components/Atoms";
import { Container, Title, Description } from "./styledComponents";

interface Props {
  room: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const PersonRoom: FC<Props> = ({ room }) => {
  return (
    <Container>
      <Title>{`At the moment is at ${room.name} room`}</Title>
      {room.description ? (
        <Description>{room.description}</Description>
      ) : (
        <FallbackText>This room has no description</FallbackText>
      )}
    </Container>
  );
};

export default PersonRoom;
