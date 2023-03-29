import React, { FC } from "react";
import { ButtonStyled } from "./styledComponents";
import { IStyledButton } from "../../../typings/buttons";

const ContactButton: FC<IStyledButton> = ({
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
}) => {
  return (
    <ButtonStyled
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
    >
      {children}
    </ButtonStyled>
  );
};

export default ContactButton;
