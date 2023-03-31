import { FC } from "react";
import { TextFieldStyled } from "./styledComponents";

interface Props {
  name: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  multiline?: boolean;
  rows?: number;
  onChange: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const StyledTextField: FC<Props> = ({
  name,
  label,
  variant = "outlined",
  multiline = false,
  rows = 1,
  onChange,
}) => {
  return (
    <TextFieldStyled
      name={name}
      label={label}
      variant={variant}
      multiline={multiline}
      rows={rows}
      onChange={onChange}
    />
  );
};

export default StyledTextField;
