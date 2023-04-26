import { FC, useContext, useEffect, useState, useRef } from "react";
import { RoomsContext } from "../../../contexts";
import Router from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import {
  useCreateRoom,
  useEditRoom,
  useHandleRoomsResponseEffect,
} from "../../../services";
import { StyledButton, StyledTextField } from "../../../components/Atoms";
import { Container, ErrorContainer, ErrorMessage } from "./styledComponents";

interface Props {
  propRoom?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface IFormData {
  name: string;
  description: string;
}

const EditOrCreateRoomForm: FC<Props> = ({ propRoom }) => {
  const { room, message } = useContext(RoomsContext);
  const [formData, setFormData] = useState<IFormData>({
    name: propRoom ? propRoom.name : "",
    description: propRoom ? propRoom.description : "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const submitted = useRef<boolean>(false);
  const { createRoom } = useCreateRoom();
  const { editRoom } = useEditRoom();

  useEffect(() => {
    if (propRoom)
      setFormData({
        name: propRoom.name,
        description: propRoom.description,
      });
  }, [propRoom]);

  const errorAction = () => {
    submitted.current = false;
    setErrorMessage(message);
  };
  const successAction = () => {
    Router.push(`/rooms/room/${room.id}`);
  };

  useHandleRoomsResponseEffect({
    successCondition: submitted.current,
    errorAction,
    successAction,
    successToast: true,
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    submitted.current = true;
    setErrorMessage("");

    if (propRoom) {
      editRoom(formData, Number(Router.query.id));
      return;
    }

    createRoom(formData);
  };

  return (
    <Container
      component="form"
      onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
    >
      <StyledTextField
        value={formData.name}
        name="name"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Name"
        variant="outlined"
        InputLabelProps={formData.name ? { shrink: true } : {}}
      />
      <StyledTextField
        value={formData.description}
        name="description"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Description"
        variant="outlined"
        multiline={true}
        rows={4}
        InputLabelProps={formData.description ? { shrink: true } : {}}
      />
      <ErrorContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorContainer>
      <StyledButton type="submit" endIcon={<CheckIcon />}>
        {propRoom ? "Edit room" : "Create room"}
      </StyledButton>
    </Container>
  );
};

export default EditOrCreateRoomForm;
