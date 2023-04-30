import { FC, useState } from "react";
import Router from "next/router";
import NoMeetingRoomIcon from "@mui/icons-material/NoMeetingRoom";
import { FallbackText, StyledButton } from "../../../components/Atoms";
import { ConfirmModal } from "../../../components/Organisms";
import { Container, Title, Description } from "./styledComponents";
import {
  useRemoveStudentFromRoom,
  useRemoveTeacherFromRoom,
} from "../../../services";
import { PersonEntities } from "../../../typings/global";
import { STUDENT_ENTITY } from "../../../config/constants";

interface Room {
  id: number;
  name: string;
  description?: string;
}
interface Props {
  room: Room;
  personId: number;
  personName: string;
  entityName: PersonEntities;
}

const PersonRoom: FC<Props> = ({ room, personId, personName, entityName }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const isStudent = entityName === STUDENT_ENTITY;
  const { removeStudentFromRoom } = useRemoveStudentFromRoom();
  const { removeTeacherFromRoom } = useRemoveTeacherFromRoom();

  const handleRemove = () => {
    if (isStudent) {
      removeStudentFromRoom(Number(personId));
      return;
    }

    removeTeacherFromRoom(room.id);
  };

  return (
    <Container>
      <Title>{`At the moment is at ${room.name} room`}</Title>
      {room.description ? (
        <Description>{room.description}</Description>
      ) : (
        <FallbackText>This room has no description</FallbackText>
      )}
      <StyledButton
        BGType="secondaryContrastOutlined"
        onClick={() => setOpenConfirm(true)}
        endIcon={<NoMeetingRoomIcon />}
        sx={{ width: "250px" }}
      >
        Remove from room
      </StyledButton>
      <ConfirmModal
        text={`Are you sure you want to remove ${personName} from the room?`}
        confirmAction={() => handleRemove()}
        successText={`${personName} was removed successfully`}
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onSuccess={() => Router.replace(Router.asPath)}
        confirmContext="RoomsContext"
      />
    </Container>
  );
};

export default PersonRoom;
