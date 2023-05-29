import { styled } from "@mui/material/styles";
import { Button, Theme } from "@mui/material";
import { IStyledButton } from "../../../typings/buttons";

const getTypeOfButton = (
  theme: Theme,
  BGType: IStyledButton["BGType"],
  transparent: boolean,
  hover: IStyledButton["hover"]
) => {
  const { primary, secondary } = theme.palette;

  const typesOfButtons = {
    primaryBG: {
      color: primary.contrastText,
      background: primary.main,
      border: `3px solid ${primary.main}`,
      hoverColor:
        hover === "secondary"
          ? secondary.contrastText
          : hover === "outlined"
          ? primary.main
          : primary.contrastText,
      hoverBackground:
        hover === "secondary"
          ? secondary.main
          : hover === "outlined" && transparent
          ? "transparent"
          : hover === "outlined"
          ? primary.contrastText
          : primary.dark,
      hoverBorder: `3px solid ${
        hover === "secondary" ? secondary.main : primary.main
      }`,
    },
    secondaryBG: {
      color: secondary.contrastText,
      background: secondary.main,
      border: `3px solid ${secondary.main}`,
      hoverColor:
        hover === "primary"
          ? primary.contrastText
          : hover === "outlined"
          ? secondary.main
          : secondary.contrastText,
      hoverBackground:
        hover === "secondary"
          ? primary.main
          : hover === "outlined" && transparent
          ? "transparent"
          : hover === "outlined"
          ? secondary.contrastText
          : secondary.dark,
      hoverBorder: `3px solid ${
        hover === "primary" ? primary.main : secondary.main
      }`,
    },
    primaryContrastBG: {
      color: primary.main,
      background: primary.contrastText,
      border: `3px solid ${primary.contrastText}`,
      hoverColor:
        hover === "secondary" ? secondary.contrastText : primary.contrastText,
      hoverBackground: transparent
        ? "transparent"
        : hover === "secondary"
        ? secondary.main
        : primary.main,
      hoverBorder: `3px solid ${
        hover === "secondary" ? secondary.contrastText : primary.contrastText
      }`,
    },
    secondaryContrastBG: {
      color: secondary.main,
      background: secondary.contrastText,
      border: `3px solid ${secondary.contrastText}`,
      hoverColor:
        hover === "primary" ? primary.contrastText : secondary.contrastText,
      hoverBackground: transparent
        ? "transparent"
        : hover === "primary"
        ? primary.main
        : secondary.main,
      hoverBorder: `3px solid ${
        hover === "primary" ? primary.contrastText : secondary.contrastText
      }`,
    },
    primaryOutlined: {
      color: primary.main,
      background: transparent ? "transparent" : primary.contrastText,
      border: `3px solid ${primary.main}`,
      hoverColor:
        hover === "outlined"
          ? secondary.contrastText
          : hover === "primary" && !transparent
          ? primary.main
          : hover === "secondary"
          ? secondary.main
          : primary.contrastText,
      hoverBackground:
        hover === "outlined" && transparent
          ? "transparent"
          : hover === "outlined"
          ? secondary.main
          : hover === "primary" && !transparent
          ? "transparent"
          : hover === "secondary"
          ? secondary.contrastText
          : primary.main,
      hoverBorder: `3px solid ${
        hover === "outlined" || hover === "secondary"
          ? secondary.contrastText
          : primary.main
      }`,
    },
    secondaryOutlined: {
      color: secondary.main,
      background: transparent ? "transparent" : secondary.contrastText,
      border: `3px solid ${secondary.main}`,
      hoverColor:
        hover === "outlined"
          ? primary.contrastText
          : hover === "secondary" && !transparent
          ? secondary.main
          : hover === "primary"
          ? primary.main
          : secondary.contrastText,
      hoverBackground:
        hover === "outlined" && transparent
          ? "transparent"
          : hover === "outlined"
          ? primary.main
          : hover === "secondary" && !transparent
          ? "transparent"
          : hover === "primary"
          ? primary.contrastText
          : secondary.main,
      hoverBorder: `3px solid ${
        hover === "outlined" || hover === "primary"
          ? primary.contrastText
          : secondary.main
      }`,
    },
    primaryContrastOutlined: {
      color: primary.contrastText,
      background: transparent ? "transparent" : secondary.contrastText,
      border: `3px solid ${primary.contrastText}`,
      hoverColor:
        hover === "primary"
          ? primary.main
          : hover === "secondary"
          ? secondary.main
          : secondary.contrastText,
      hoverBackground: transparent
        ? "transparent"
        : hover === "primary"
        ? primary.contrastText
        : hover === "secondary"
        ? secondary.contrastText
        : primary.contrastText,
      hoverBorder: `3px solid ${
        hover === "primary"
          ? primary.main
          : hover === "secondary"
          ? secondary.main
          : secondary.contrastText
      }`,
    },
    secondaryContrastOutlined: {
      color: secondary.contrastText,
      background: transparent ? "transparent" : primary.contrastText,
      border: `3px solid ${secondary.contrastText}`,
      hoverColor:
        hover === "secondary"
          ? secondary.main
          : hover === "primary"
          ? primary.main
          : primary.contrastText,
      hoverBackground: transparent
        ? "transparent"
        : hover === "secondary"
        ? secondary.contrastText
        : hover === "primary"
        ? primary.contrastText
        : secondary.contrastText,
      hoverBorder: `3px solid ${
        hover === "secondary"
          ? secondary.main
          : hover === "primary"
          ? primary.main
          : primary.contrastText
      }`,
    },
  };

  return typesOfButtons[BGType as keyof typeof typesOfButtons];
};

export const ButtonStyled = styled(Button, {
  shouldForwardProp: (prop) =>
    !["isDisabled", "BGType", "transparent", "shadow"].includes(prop as string),
})<{
  isDisabled?: boolean;
  BGType: IStyledButton["BGType"];
  transparent: boolean;
  hover: IStyledButton["hover"];
  shadow: boolean;
}>(({ theme, isDisabled, BGType, transparent, hover, shadow }) => {
  const typeOfButton = getTypeOfButton(theme, BGType, transparent, hover);
  return {
    width: "200px",
    height: theme.custom.buttons.height,
    margin: "0px",
    padding: "9px 0px 8px 0px",
    color: isDisabled ? theme.custom.buttons.disabledColor : typeOfButton.color,
    fontSize: theme.custom.buttons.fontSizeMd,
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.46px",
    textTransform: "none",
    background: isDisabled
      ? theme.custom.buttons.disabledBackground
      : typeOfButton.background,
    borderRadius: theme.custom.radius.medium,
    border: isDisabled
      ? `2px solid ${theme.custom.buttons.disabledBackground}`
      : typeOfButton.border,
    boxShadow: shadow
      ? "rgb(0 0 0 / 12%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 20%) 0px 3px 1px -2px"
      : "",
    "& svg": {
      fontSize: "28px !important",
      color: "currentColor",
    },
    "&:hover, &:focus, &:active": {
      color: isDisabled
        ? theme.custom.buttons.disabledColor
        : typeOfButton.hoverColor,
      background: isDisabled
        ? theme.custom.buttons.disabledBackground
        : typeOfButton.hoverBackground,
      border: isDisabled
        ? theme.custom.buttons.disabledBackground
        : typeOfButton.hoverBorder,
    },
  };
});
