import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { EditOrCreateRoomForm } from "../../Organisms";
import { Container } from "./styledComponents";

interface Props {
  room?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const EditOrCreateRoomPage: FC<Props> = ({ room }) => {
  return (
    <Container>
      <SectionTitle>
        {room ? `Edit ${room.name} room` : "Create a brand new room"}
      </SectionTitle>
      <EditOrCreateRoomForm propRoom={room} />
    </Container>
  );
};

export default EditOrCreateRoomPage;
