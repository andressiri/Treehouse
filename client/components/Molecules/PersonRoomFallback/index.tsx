import { FC, useState } from "react";
import { useRouter } from "next/router";
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
  const { asPath, replace } = useRouter();

  const addingResolve = () => replace(asPath, undefined, { scroll: false });
  const resolveOptions = {
    errorAction: addingResolve,
    successAction: addingResolve,
    errorToast: true,
    successToast: true,
  };

  const { editStudent, isLoading: studentLoading } =
    useEditStudent(resolveOptions);

  const { editRoom, isLoading: roomLoading } = useEditRoom(resolveOptions);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRoomSelected(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!roomSelected || roomSelected === "No room") return;

    if (isStudent) {
      editStudent({ roomId: roomSelected }, Number(personId));
      return;
    }

    editRoom({ teacherId: `${personId}` }, Number(roomSelected));
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
          teacherId={isStudent ? undefined : personId}
          showTeacherless={!isStudent}
        />
        <StyledButton
          disabled={!roomSelected || roomLoading || studentLoading}
          type="submit"
          BGType="secondaryContrastOutlined"
          endIcon={<MeetingRoomIcon />}
          sx={{ width: "250px" }}
        >
          {roomLoading || studentLoading ? "Adding to room..." : "Add to room"}
        </StyledButton>
      </FormContainer>
    </Container>
  );
};

export default PersonRoomFallback;
