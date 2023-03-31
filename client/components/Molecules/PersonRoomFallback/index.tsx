import { FC, useState } from "react";
import Router from "next/router";
import { MenuItem } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { StyledButton, StyledSelect } from "../../../components/Atoms";
import { Container, FormContainer, Title } from "./styledComponents";
import { useEditRoom, useEditStudent } from "../../../services";

interface Props {
  rooms: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "student" | "teacher";
  personId: string;
  personName: string;
}

const PersonRoomFallback: FC<Props> = ({
  rooms,
  modelName,
  personId,
  personName,
}) => {
  const [roomSelected, setRoomSelected] = useState("");
  const { editRoom } = useEditRoom();
  const { editStudent } = useEditStudent();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roomsArray = rooms.filter((room: any) => {
    if (modelName === "teacher" && room.teacherId) return null;
    return true;
  });

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
        <StyledSelect
          disabled={!roomsArray.length}
          select={true}
          value={roomSelected}
          name="roomSelected"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => handleOnChange(e)}
          label={!roomsArray.length ? "No rooms available" : "Room"}
          variant="outlined"
        >
          {roomsArray.map(
            (
              option: any, // eslint-disable-line @typescript-eslint/no-explicit-any
              id: number
            ) => (
              <MenuItem key={`${option.name}${id}`} value={option.id}>
                {option.name}
              </MenuItem>
            )
          )}
          <MenuItem value={""}>No room</MenuItem>
        </StyledSelect>
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
