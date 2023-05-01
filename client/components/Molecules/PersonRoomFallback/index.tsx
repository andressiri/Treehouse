import { FC, useState } from "react";
import Router from "next/router";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useEditRoom, useEditStudent } from "../../../services";
import { StyledButton } from "../../../components/Atoms";
import { RoomSelect } from "../../../components/Molecules";
import { Container, FormContainer, Title } from "./styledComponents";
import { PersonEntities } from "../../../typings/global";
import { STUDENT_ENTITY } from "../../../config/constants";

interface Props {
  personId: number;
  personName: string;
  entityName: PersonEntities;
}

const PersonRoomFallback: FC<Props> = ({
  personId,
  personName,
  entityName,
}) => {
  const [roomSelected, setRoomSelected] = useState("");
  const isStudent = entityName === STUDENT_ENTITY;
  const { editStudent } = useEditStudent();
  const { editRoom, isLoading } = useEditRoom({
    errorToast: true,
    successToast: true,
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRoomSelected(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!roomSelected || roomSelected === "No room") return;

    if (isStudent) {
      await editStudent({ roomId: roomSelected }, Number(personId));
    }

    await editRoom({ teacherId: `${personId}` }, Number(roomSelected));
    Router.replace(Router.asPath);
  };

  return (
    <Container>
      <Title>{`At the moment ${personName} has no room`}</Title>
      <FormContainer
        component="form"
        onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
      >
        <RoomSelect
          value={roomSelected}
          name="roomSelected"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => handleOnChange(e)}
          showJustTeacherless={!isStudent}
        />
        <StyledButton
          disabled={!roomSelected || isLoading}
          type="submit"
          BGType="secondaryContrastOutlined"
          endIcon={<MeetingRoomIcon />}
          sx={{ width: "250px" }}
        >
          {isLoading ? "Adding to room..." : "Add to room"}
        </StyledButton>
      </FormContainer>
    </Container>
  );
};

export default PersonRoomFallback;
