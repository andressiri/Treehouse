import { FC } from "react";
import { SectionTitle } from "../../../components/Atoms";
import { RoomCardsDisplay } from "../../../components/Organisms";
import { Container } from "./styledComponents";

interface Props {
  rooms: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RoomPage: FC<Props> = ({ rooms }) => {
  return (
    <Container component="section">
      <SectionTitle>This are all our rooms</SectionTitle>
      <RoomCardsDisplay roomsArray={rooms} />
    </Container>
  );
};

export default RoomPage;
