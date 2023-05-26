import { FC, useState } from "react";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CheckIcon from "@mui/icons-material/Check";
import { StyledButton } from "../../Atoms";
import { FormField } from "../../Molecules";
import { ConfirmModal } from "..";
import {
  Container,
  ActionsContainer,
  ErrorContainer,
  ErrorMessage,
} from "./styledComponents";
import { IFormProps, IFormFieldSpecifics } from "../../../typings/forms";

const BasicFormConstructor: FC<IFormProps> = ({
  formData,
  formVisited,
  formFieldsSpecificsArray,
  handleVisited,
  handleOnChange,
  checkChanges,
  handleSubmit,
  handleCancel,
  errorMessage,
  disableSubmit,
  buttonText,
}) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const openConfirmModal = () => setOpenConfirm(true);

  return (
    <Container
      component="form"
      onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
    >
      {formFieldsSpecificsArray.map((field: IFormFieldSpecifics, id) => {
        return (
          <FormField
            type={field.type}
            required={field.required}
            disabled={field.disabled}
            select={field.select}
            multiline={field.multiline}
            rows={field.rows}
            error={field.error}
            helperText={field.helperText}
            conditionalHelperText={field.conditionalHelperText}
            InputProps={field.InputProps}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => handleOnChange(e)}
            field={field.field}
            label={field.label}
            formData={formData}
            formVisited={formVisited}
            handleVisited={handleVisited}
            key={`${buttonText}${field.field}${id}`}
          >
            {field.children}
          </FormField>
        );
      })}
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
        <StyledButton
          type="submit"
          disabled={disableSubmit}
          endIcon={<CheckIcon />}
        >
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

export default BasicFormConstructor;
