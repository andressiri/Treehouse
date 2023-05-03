import { FC, useState } from "react";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CheckIcon from "@mui/icons-material/Check";
import { StyledButton, StyledTextField } from "../../Atoms";
import { ConfirmModal } from "../../Organisms";
import {
  Container,
  ActionsContainer,
  ErrorContainer,
  ErrorMessage,
} from "./styledComponents";
import { IRoomFormProps } from "../../../typings/rooms";

const RoomForm: FC<IRoomFormProps> = ({
  formData,
  handleOnChange,
  checkChanges,
  handleSubmit,
  handleCancel,
  errorMessage,
  buttonText,
}) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const openConfirmModal = () => setOpenConfirm(true);

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
      <ActionsContainer>
        <StyledButton
          BGType="secondaryContrastOutlined"
          endIcon={<NotInterestedIcon />}
          onClick={() => {
            checkChanges() ? openConfirmModal() : handleCancel();
          }}
        >
          Cancel
        </StyledButton>
        <StyledButton type="submit" endIcon={<CheckIcon />}>
          {buttonText}
        </StyledButton>
      </ActionsContainer>
      <ConfirmModal
        text={`All your changes will be lost, are you sure you want to cancel?`}
        confirmAction={handleCancel}
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
      />
    </Container>
  );
};

export default RoomForm;
