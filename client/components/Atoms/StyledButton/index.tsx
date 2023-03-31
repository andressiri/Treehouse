import React, { FC } from "react";
import { ButtonStyled } from "./styledComponents";
import { IStyledButton } from "../../../typings/buttons";

const ContactButton: FC<IStyledButton> = ({
  disabled = false,
  BGType = "primaryBG",
  passRef,
  transparent = false,
  hover,
  sx,
  startIcon,
  endIcon,
  shadow = true,
  onClick,
  onFocus,
  onBlur,
  tabIndex = 0,
  children,
  type,
}) => {
  return (
    <ButtonStyled
      disabled={disabled}
      transparent={transparent}
      hover={hover}
      ref={passRef}
      sx={sx}
      startIcon={startIcon}
      endIcon={endIcon}
      BGType={BGType}
      shadow={shadow}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default ContactButton;
