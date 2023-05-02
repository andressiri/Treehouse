import { FC } from "react";
import { TextFieldStyled } from "./styledComponents";
import { InputLabelProps } from "@mui/material";

interface Props {
  value?: string;
  name: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  multiline?: boolean;
  rows?: number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  InputLabelProps?: Partial<InputLabelProps>;
}

const StyledTextField: FC<Props> = ({
  value,
  name,
  label,
  variant = "outlined",
  multiline = false,
  rows = 1,
  onChange,
  InputLabelProps,
}) => {
  return (
    <TextFieldStyled
      value={value}
      name={name}
      label={label}
      variant={variant}
      multiline={multiline}
      rows={rows}
      onChange={onChange}
      InputLabelProps={InputLabelProps}
    />
  );
};

export default StyledTextField;
