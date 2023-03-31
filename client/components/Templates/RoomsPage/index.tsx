import { FC } from "react";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { SectionTitle, StyledButton } from "../../../components/Atoms";
import { RoomCardsDisplay } from "../../../components/Organisms";
import { Container, StyledLink } from "./styledComponents";

interface Props {
  rooms: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RoomsPage: FC<Props> = ({ rooms }) => {
  return (
    <Container component="section">
      <SectionTitle>This are all our rooms</SectionTitle>
      <RoomCardsDisplay roomsArray={rooms} />
      <StyledLink href="/rooms/create">
        <StyledButton endIcon={<MeetingRoomIcon />} tabIndex={-1}>
          Create room
        </StyledButton>
      </StyledLink>
    </Container>
  );
};

export default RoomsPage;
