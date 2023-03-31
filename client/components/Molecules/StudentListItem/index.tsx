import { FC, useState, useRef } from "react";
import Router from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import NoMeetingRoomIcon from "@mui/icons-material/NoMeetingRoom";
import { useRemoveStudentFromRoom, useRemoveSibling } from "../../../services";
import { ActionIconButton, LinkIconButton } from "../../../components/Atoms";
import { ConfirmModal } from "../../../components/Organisms";
import { Container, Name, ActionsContainer } from "./styledComponents";

interface Props {
  id: number;
  name: string;
  listOf?: "siblings" | "students";
  studentId?: string;
}

const StudentListItem: FC<Props> = ({ id, name, listOf, studentId }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const siblings = useRef<boolean>(listOf === "siblings");
  const { removeStudentFromRoom } = useRemoveStudentFromRoom();
  const { removeSibling } = useRemoveSibling();

  const handleDeleteSibling = (removeFromOtherSiblings: boolean) => {
    const formData = removeFromOtherSiblings
      ? { siblingId: `${id}`, removeFromOtherSiblings: true }
      : { siblingId: `${id}` };
    removeSibling(formData, Number(studentId));
  };

  const handleRemoveFromClassroom = () => {
    removeStudentFromRoom(id);
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
          onClick={() => setOpenConfirm(true)}
          icon={
            listOf === "siblings" ? <PersonRemoveIcon /> : <NoMeetingRoomIcon />
          }
          tooltipText={siblings.current ? "Remove sibling" : "Remove from room"}
          tooltipWidth="120px"
        />
        <ConfirmModal
          text={
            siblings.current
              ? "Do you want to remove it from the other siblings too?"
              : `Are you sure you want to remove ${name} from the room`
          }
          confirmAction={
            siblings.current
              ? () => handleDeleteSibling(true)
              : handleRemoveFromClassroom
          }
          noAction={siblings.current ? () => handleDeleteSibling(false) : null}
          successText={`${name} was removed successfully`}
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          onSuccess={() => Router.replace(Router.asPath)}
          confirmContext="StudentsContext"
        />
      </ActionsContainer>
    </Container>
  );
};

export default StudentListItem;
