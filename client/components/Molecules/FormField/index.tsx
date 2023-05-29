import { FC } from "react";
import { StyledTextField } from "../../../components/Atoms";
import { FormFieldProps } from "../../../typings/forms";

const FormField: FC<FormFieldProps> = ({
  type = "text",
  required = false,
  disabled = false,
  select = false,
  multiline = false,
  rows = 1,
  error,
  helperText = "",
  conditionalHelperText = true,
  InputProps,
  onChange,
  children,
  field,
  label,
  formData,
  formVisited,
  handleVisited,
}) => {
  return (
    <StyledTextField
      type={type}
      required={required}
      disabled={disabled}
      select={select}
      multiline={multiline}
      rows={rows}
      error={
        error ||
        ((formVisited
          ? formVisited[field as keyof typeof formVisited]
          : true) &&
          !formData[field as keyof typeof formData] &&
          required)
      }
      helperText={helperText}
      conditionalHelperText={conditionalHelperText}
      InputProps={InputProps}
      onChange={(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => onChange(e)}
      onBlur={(e) => {
        if (handleVisited) handleVisited(e);
      }}
      value={formData[field as keyof typeof formData] as string | undefined}
      name={field}
      label={label || `${Array.from(field)[0].toUpperCase()}${field.slice(1)}`} // charAt function may cause problems at server side
      variant="outlined"
      InputLabelProps={
        formData[field as keyof typeof formData] ? { shrink: true } : {}
      }
    >
      {children}
    </StyledTextField>
  );
};

export default FormField;
