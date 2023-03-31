import { FC } from "react";
import { TextFieldStyled } from "./styledComponents";

interface Props {
  value?: string;
  name: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  multiline?: boolean;
  rows?: number;
  onChange: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  InputLabelProps?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
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
