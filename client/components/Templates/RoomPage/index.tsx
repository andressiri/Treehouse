import { FC, useState } from "react";
import Router from "next/router";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useDeleteRoom } from "../../../services";
import { SectionTitle, StyledButton } from "../../../components/Atoms";
import {
  ConfirmModal,
  RoomTeacher,
  StudentsList,
} from "../../../components/Organisms";
import {
  Container,
  Description,
  StudentsTitle,
  StudentsFallback,
  DeleteContainer,
} from "./styledComponents";

interface Props {
  room: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RoomPage: FC<Props> = ({ room }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const { deleteRoom } = useDeleteRoom();

  return (
    <Container component="section">
      <SectionTitle>{room.name}</SectionTitle>
      <Description>{room.description}</Description>
      {room.Teacher ? <RoomTeacher teacher={room.Teacher} /> : <></>}
      <StudentsTitle>This are its students</StudentsTitle>
      {room.Students ? (
        <StudentsList studentsArray={room.Students} />
      ) : (
        <StudentsFallback>There are no students registered</StudentsFallback>
      )}
      <DeleteContainer>
        <StyledButton
          BGType="secondaryContrastOutlined"
          endIcon={<WarningAmberIcon />}
          onClick={() => setOpenConfirm(true)}
        >
          Delete room
        </StyledButton>
      </DeleteContainer>
      <ConfirmModal
        text={`Are you sure you want to delete the ${room.name} room?`}
        confirmAction={() => deleteRoom(Number(Router.query.id))}
        successText={`${room.name} was deleted successfully`}
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onSuccess={() => Router.push("/")}
        confirmContext="RoomsContext"
      />
    </Container>
  );
};

export default RoomPage;
