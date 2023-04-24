import { FC, useState } from "react";
import Router from "next/router";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useEditRoom, useEditStudent } from "../../../services";
import { StyledButton } from "../../../components/Atoms";
import { RoomSelect } from "../../../components/Molecules";
import { Container, FormContainer, Title } from "./styledComponents";

interface Props {
  modelName: "student" | "teacher";
  personId: string;
  personName: string;
}

const PersonRoomFallback: FC<Props> = ({ modelName, personId, personName }) => {
  const [roomSelected, setRoomSelected] = useState("");
  const { editRoom } = useEditRoom();
  const { editStudent } = useEditStudent();

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRoomSelected(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!roomSelected || roomSelected === "No room") return;

    if (modelName === "student") {
      await editStudent({ roomId: roomSelected }, Number(personId));
    }

    await editRoom({ teacherId: personId }, Number(roomSelected));
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
          showJustTeacherless={modelName === "teacher"}
        />
        <StyledButton
          disabled={!roomSelected}
          type="submit"
          BGType="secondaryContrastOutlined"
          endIcon={<MeetingRoomIcon />}
          sx={{ width: "250px" }}
        >
          Add to room
        </StyledButton>
      </FormContainer>
    </Container>
  );
};

export default PersonRoomFallback;
