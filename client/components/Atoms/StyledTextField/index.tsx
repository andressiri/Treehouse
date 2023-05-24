import React, { FC } from "react";
import { TextFieldStyled } from "./styledComponents";
import { TextFieldProps } from "../../../typings/forms";

const StyledTextField: FC<TextFieldProps> = ({
  type = "text",
  required = false,
  disabled = false,
  select,
  multiline = false,
  rows = 1,
  error,
  helperText = "",
  conditionalHelperText = true,
  onChange,
  children,
  onBlur,
  value,
  name,
  label,
  variant = "outlined",
  InputLabelProps,
}) => {
  return (
    <TextFieldStyled
      type={type}
      required={required}
      disabled={disabled}
      select={Boolean(children) || select}
      multiline={multiline}
      rows={rows}
      rowsNumber={rows}
      error={error}
      isError={error}
      helperText={helperText}
      conditionalHelperText={conditionalHelperText}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      label={label}
      variant={variant}
      InputLabelProps={InputLabelProps}
    >
      {children}
    </TextFieldStyled>
  );
};

export default StyledTextField;
