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

interface Props {
  room: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "student" | "teacher";
  personId: string;
  personName: string;
}

const PersonRoom: FC<Props> = ({ room, modelName, personId, personName }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  const { removeStudentFromRoom } = useRemoveStudentFromRoom();
  const { removeTeacherFromRoom } = useRemoveTeacherFromRoom();

  const handleRemove = () => {
    if (modelName === "student") {
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
