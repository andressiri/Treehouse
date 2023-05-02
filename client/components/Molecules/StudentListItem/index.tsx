import { FC, useState } from "react";
import { useRouter } from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import NoMeetingRoomIcon from "@mui/icons-material/NoMeetingRoom";
import { useRemoveStudentFromRoom, useRemoveSibling } from "../../../services";
import { ActionIconButton, LinkIconButton } from "../../../components/Atoms";
import { ConfirmModal } from "../../../components/Organisms";
import { Container, Name, ActionsContainer } from "./styledComponents";
import { STUDENTS_ROUTE, STUDENTS_SINGULAR } from "../../../config/constants";

interface Props {
  id: number;
  name: string;
  listOf?: "siblings" | "students";
  studentId?: number;
}

const StudentListItem: FC<Props> = ({ id, name, listOf, studentId }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const { asPath, replace } = useRouter();
  const isSibling = listOf === "siblings";

  const removingResolve = () => {
    replace(asPath, undefined, { scroll: false });
  };
  const resolveOptions = {
    errorAction: removingResolve,
    successAction: removingResolve,
    errorToast: true,
    successToast: true,
  };

  const { removeSibling, isLoading: siblingLoading } =
    useRemoveSibling(resolveOptions);
  const { removeStudentFromRoom, isLoading: studentLoading } =
    useRemoveStudentFromRoom(resolveOptions);

  const handleDeleteSibling = (removeFromOtherSiblings?: boolean) => {
    const formData = removeFromOtherSiblings
      ? { siblingId: `${id}`, removeFromOtherSiblings: true }
      : { siblingId: `${id}` };

    removeSibling(formData, Number(studentId));
  };

  const handleRemoveFromAllSiblings = () => handleDeleteSibling(true);

  const handleRemoveFromClassroom = () => {
    removeStudentFromRoom(id);
  };

  return (
    <Container>
      <Name>{name}</Name>
      <ActionsContainer>
        <LinkIconButton
          href={`/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${id}`}
          icon={<VisibilityIcon />}
          tooltipText="See more..."
          tooltipWidth="70px"
        />
        <ActionIconButton
          onClick={() => setOpenConfirm(true)}
          icon={
            listOf === "siblings" ? <PersonRemoveIcon /> : <NoMeetingRoomIcon />
          }
          tooltipText={isSibling ? "Remove sibling" : "Remove from room"}
          tooltipWidth="120px"
        />
        <ConfirmModal
          text={
            isSibling
              ? "Do you want to remove it from the other siblings too?"
              : `Are you sure you want to remove ${name} from the room`
          }
          confirmAction={
            isSibling ? handleRemoveFromAllSiblings : handleRemoveFromClassroom
          }
          noAction={isSibling ? handleDeleteSibling : undefined}
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          isLoading={siblingLoading || studentLoading}
        />
      </ActionsContainer>
    </Container>
  );
};

export default StudentListItem;
