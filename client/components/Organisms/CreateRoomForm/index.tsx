import { FC, useContext, useEffect, useState } from "react";
import { RoomsContext } from "../../../contexts";
import Router from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import { useCreateRoom } from "../../../services";
import { StyledButton, StyledTextField } from "../../../components/Atoms";
import { Container, ErrorContainer, ErrorMessage } from "./styledComponents";

interface IFormData {
  name: string;
  description: string;
}

const CreateRoomForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    description: "",
  });
  const { room, isSuccess, setIsSuccess, message, setMessage } =
    useContext(RoomsContext);
  const { createRoom } = useCreateRoom();

  useEffect(() => {
    if (isSuccess) {
      setIsSuccess(false);
      setMessage("");
      Router.push(`/rooms/room/${room.id}`);
    }

    return () => {
      setMessage("");
    };
  }, [room.id, isSuccess, setIsSuccess, setMessage]);

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
    createRoom(formData);
  };

  return (
    <Container
      component="form"
      onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
    >
      <StyledTextField
        name="name"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Name"
        variant="outlined"
      />
      <StyledTextField
        name="description"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Description"
        variant="outlined"
        multiline={true}
        rows={4}
      />
      <ErrorContainer>
        {message ? <ErrorMessage>{message}</ErrorMessage> : <></>}
      </ErrorContainer>
      <StyledButton type="submit" endIcon={<CheckIcon />}>
        Create room
      </StyledButton>
    </Container>
  );
};

export default CreateRoomForm;
