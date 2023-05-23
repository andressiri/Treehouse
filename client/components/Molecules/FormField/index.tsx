import { FC } from "react";
import { StyledTextField } from "../../../components/Atoms";
import { FormFieldProps } from "../../../typings/forms";

const FormField: FC<FormFieldProps> = ({
  field,
  formData,
  formVisited,
  handleVisited,
  handleOnChange,
  required = false,
  disabled = false,
  select = false,
  error,
  multiline = false,
  rows = 1,
  helperText,
  children,
}) => {
  return (
    <StyledTextField
      disabled={disabled}
      select={select}
      error={
        error ||
        (formVisited[field as keyof typeof formVisited] &&
          !formData[field as keyof typeof formData] &&
          required)
      }
      onBlur={(e) => handleVisited(e)}
      value={formData[field as keyof typeof formData] as string | undefined}
      name={field}
      onChange={(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => handleOnChange(e)}
      label={`${Array.from(field)[0].toUpperCase()}${field.slice(1)}`} // charAt function may cause problems at server side
      variant="outlined"
      InputLabelProps={
        formData[field as keyof typeof formData] ? { shrink: true } : {}
      }
      multiline={multiline}
      rows={rows}
      helperText={helperText}
    >
      {children}
    </StyledTextField>
  );
};

export default FormField;
