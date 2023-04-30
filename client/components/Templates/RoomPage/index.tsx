import { FC, useState } from "react";
import Router from "next/router";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import EditIcon from "@mui/icons-material/Edit";
import { useDeleteRoom } from "../../../services";
import {
  FallbackText,
  SectionTitle,
  StyledButton,
} from "../../../components/Atoms";
import {
  ConfirmModal,
  RoomTeacher,
  StudentsList,
} from "../../../components/Organisms";
import {
  Container,
  InnerContainer,
  Description,
  StudentsTitle,
  ActionsContainer,
} from "./styledComponents";
import { IRoomWithRelations } from "../../../typings/rooms";
import { ITeacher } from "../../../typings/teachers";
import { EDIT, ROOMS_ROUTE } from "../../../config/constants";

interface Props {
  room: IRoomWithRelations;
}

const RoomPage: FC<Props> = ({ room }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const { deleteRoom } = useDeleteRoom();

  return (
    <Container component="section">
      <InnerContainer>
        <SectionTitle>{room.name}</SectionTitle>
        {room.description ? (
          <Description>{room.description}</Description>
        ) : (
          <FallbackText>This room has no description</FallbackText>
        )}
        {(room.Teacher as ITeacher)?.id ? (
          <RoomTeacher teacher={room.Teacher as ITeacher} />
        ) : (
          <></>
        )}
        <StudentsTitle>This are its students</StudentsTitle>
        {room.Students && room.Students.length ? (
          <StudentsList studentsArray={room.Students} />
        ) : (
          <FallbackText>There are no students registered</FallbackText>
        )}
        <ActionsContainer>
          <StyledButton
            BGType="secondaryContrastOutlined"
            endIcon={<WarningAmberIcon />}
            onClick={() => setOpenConfirm(true)}
          >
            Delete room
          </StyledButton>
          <StyledButton
            endIcon={<EditIcon />}
            onClick={() => Router.push(`/${ROOMS_ROUTE}/${EDIT}/${room.id}`)}
          >
            Edit room
          </StyledButton>
        </ActionsContainer>
        <ConfirmModal
          text={`Are you sure you want to delete the ${room.name} room?`}
          confirmAction={() => deleteRoom(Number(Router.query.id))}
          successText={`${room.name} was deleted successfully`}
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          onSuccess={() => Router.push("/")}
          confirmContext="RoomsContext"
        />
      </InnerContainer>
    </Container>
  );
};

export default RoomPage;
