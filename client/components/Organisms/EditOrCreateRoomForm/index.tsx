import { FC, useContext, useState, useRef } from "react";
import { RoomsContext } from "../../../contexts";
import Router from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import { useCreateRoom, useEditRoom } from "../../../services";
import { StyledButton, StyledTextField } from "../../../components/Atoms";
import { Container, ErrorContainer, ErrorMessage } from "./styledComponents";
import { AnyRoom } from "../../../typings/rooms";
import { ROOMS_ROUTE, ROOMS_SINGULAR } from "../../../config/constants";

interface Props {
  propRoom?: AnyRoom;
}

interface IFormData {
  name: string;
  description: string;
}

const EditOrCreateRoomForm: FC<Props> = ({ propRoom }) => {
  const { room } = useContext(RoomsContext);
  const [formData, setFormData] = useState<IFormData>({
    name: propRoom?.name || "",
    description: propRoom?.description || "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const submitted = useRef<boolean>(false);

  const errorAction = (message: string) => {
    submitted.current = false;
    setErrorMessage(message);
  };

  const successAction = () => {
    Router.push(`/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${(room as AnyRoom)?.id}`);
  };

  const { editRoom, message: editMessage } = useEditRoom({
    successCondition: submitted.current,
    errorAction: () => errorAction(editMessage),
    successAction,
    successToast: true,
  });

  const { createRoom, message: createMessage } = useCreateRoom({
    successCondition: submitted.current,
    errorAction: () => errorAction(createMessage),
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
