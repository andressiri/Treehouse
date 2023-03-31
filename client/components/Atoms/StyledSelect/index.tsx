import { FC } from "react";
import { TextFieldStyled } from "./styledComponents";

interface Props {
  disabled?: boolean;
  select: boolean;
  value?: string;
  name: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  multiline?: boolean;
  rows?: number;
  onChange: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  InputLabelProps?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  children: JSX.Element | JSX.Element[];
}

const StyledSelect: FC<Props> = ({
  disabled = false,
  select = true,
  value,
  name,
  label,
  variant = "outlined",
  multiline = false,
  rows = 1,
  onChange,
  InputLabelProps,
  children,
}) => {
  return (
    <TextFieldStyled
      disabled={disabled}
      select={select}
      value={value}
      name={name}
      label={label}
      variant={variant}
      multiline={multiline}
      rows={rows}
      onChange={onChange}
      InputLabelProps={InputLabelProps}
    >
      {children}
    </TextFieldStyled>
  );
};

export default StyledSelect;
