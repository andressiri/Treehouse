import { FC, useState, useRef } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import NoMeetingRoomIcon from "@mui/icons-material/NoMeetingRoom";
import { useRemoveStudentFromRoom } from "../../../services";
import { ActionIconButton, LinkIconButton } from "../../../components/Atoms";
import { ConfirmModal } from "../../../components/Organisms";
import { Container, Name, ActionsContainer } from "./styledComponents";

interface Props {
  id: number;
  name: string;
  listOf?: "siblings" | "students";
}

const StudentListItem: FC<Props> = ({ id, name, listOf }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const siblings = useRef<boolean>(listOf === "siblings");
  const { removeStudentFromRoom } = useRemoveStudentFromRoom();

  const handleDeleteSibling = () => {}; // eslint-disable-line
  const handleRemoveFromClassroom = () => {
    setOpenConfirm(true);
  };

  return (
    <Container>
      <Name>{name}</Name>
      <ActionsContainer>
        <LinkIconButton
          href={`/students/student/${id}`}
          icon={<VisibilityIcon />}
          tooltipText="See more..."
          tooltipWidth="70px"
        />
        <ActionIconButton
          onClick={
            siblings.current ? handleDeleteSibling : handleRemoveFromClassroom
          }
          icon={
            listOf === "siblings" ? <PersonRemoveIcon /> : <NoMeetingRoomIcon />
          }
          tooltipText={siblings.current ? "Remove sibling" : "Remove from room"}
          tooltipWidth="120px"
        />
        <ConfirmModal
          text={`Are you sure you want to remove ${name} ${
            siblings.current ? "as sibling" : "from the room"
          }?`}
          confirmAction={() => removeStudentFromRoom(id)}
          successText={`${name} was removed successfully`}
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          confirmContext="RoomsContext"
        />
      </ActionsContainer>
    </Container>
  );
};

export default StudentListItem;
