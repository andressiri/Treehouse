import { SxProps } from "@mui/system";

export interface IStyledButton {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  BGType?:
    | "primaryBG"
    | "secondaryBG"
    | "primaryContrastBG"
    | "secondaryContrastBG"
    | "primaryOutlined"
    | "secondaryOutlined"
    | "primaryContrastOutlined"
    | "secondaryContrastOutlined";
  transparent?: boolean;
  hover?: "primary" | "secondary" | "outlined";
  passRef?: RefObject<HTMLButtonElement>;
  sx?: SxProps;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  shadow?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: MouseEventHandler<HTMLButtonElement>;
  onBlur?: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  children?: string | JSX.Element | JSX.Element[];
}
