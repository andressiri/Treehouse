import { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { StyledButton, StyledTextField } from "../../Atoms";
import { Container, ErrorContainer, ErrorMessage } from "./styledComponents";
import { IRoomFormProps } from "../../../typings/rooms";

const RoomForm: FC<IRoomFormProps> = ({
  formData,
  handleOnChange,
  handleSubmit,
  errorMessage,
  buttonText,
}) => {
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
        {buttonText}
      </StyledButton>
    </Container>
  );
};

export default RoomForm;
