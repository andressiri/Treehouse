import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const ContainerList = styled("ul")(() => ({
  padding: "40px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
}));

export const StyledItem = styled("li", {
  shouldForwardProp: (prop) =>
    !["isDrawer", "isDrawerOpen", "appearingTime"].includes(prop as string),
})<{ isDrawer?: boolean; isDrawerOpen?: boolean; appearingTime: number }>(
  ({ isDrawer, isDrawerOpen, appearingTime }) => ({
    transform:
      isDrawer && !isDrawerOpen ? "translateX(400%)" : "translateX(0%)",
    opacity: isDrawer && !isDrawerOpen ? "0.000001" : "1",
    transition: isDrawer ? `${appearingTime}ms all` : "unset",
  })
);

export const NavItemButton = styled(Button)(({ theme }) => ({
  position: "relative",
  marginTop: "-10px",
  gap: "5px",
  color: theme.palette.primary.contrastText,
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.46px",
  "& svg": {
    fontSize: "30px !important",
    margin: "0px -2px 4px 0px",
  },
  "&::before": {
    content: "''",
    zIndex: -2,
    position: "absolute",
    top: "5%",
    left: "50%",
    width: "0%",
    height: "100%",
    background: "transparent",
    borderRadius: "16px",
    transition: "250ms all ease-in",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    top: "75%",
    left: "calc(5% + 36px)",
    width: "0%",
    height: "2px",
    borderRadius: "6px",
    background: "currentcolor",
  },
  "&:hover, &:focus": {
    background: "transparent",
    "& svg": {
      transition: "400ms all",
      transform: "rotate(-360deg)",
    },
    "&::after": {
      transition: "400ms all ease-in-out",
      width: "calc(90% - 36px)",
    },
  },
  "&:active, &:focus": {
    "&::before": {
      inset: "-5%",
      width: "110%",
      background: theme.palette.primary.light.replace("1)", "0.3)"),
    },
  },
}));
