import { styled } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  top: "0px",
  bottom: "0px",
  left: "0px",
  width: theme.custom.sidebar.width,
  minHeight: "100vh",
  padding: "45px 10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: theme.palette.primary.main.replace("1)", "0.85)"),
  color: theme.palette.primary.contrastText,
}));

export const LogoContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["isDrawerOpen", "appearingTime"].includes(prop as string),
})<{ isDrawerOpen?: boolean; appearingTime: number }>(
  ({ isDrawerOpen, appearingTime }) => ({
    margin: "20px 0px",
    transform: !isDrawerOpen ? "translateX(-400%)" : "translateX(0%)",
    opacity: !isDrawerOpen ? "0.00001" : "1",
    transition: `${appearingTime}ms all`,
  })
);

export const StyledDivider = styled(Divider, {
  shouldForwardProp: (prop) =>
    !["isDrawer", "isDrawerOpen", "appearingTime"].includes(prop as string),
})<{ isDrawer?: boolean; isDrawerOpen?: boolean; appearingTime?: number }>(
  ({ theme, isDrawer, isDrawerOpen, appearingTime }) => ({
    height: "2px",
    width: "88%",
    margin: "40px 0px 0px 0px",
    background: "rgba(255, 255, 255, 1)",
    color: theme.palette.primary.contrastText,
    transform: !isDrawerOpen ? "translateX(-400%)" : "translateX(0%)",
    opacity: isDrawer && !isDrawerOpen ? "0.00001" : "1",
    transition: `${appearingTime}ms all`,
  })
);

export const SocialMediaContainer = styled(Box)(() => ({
  marginTop: "auto",
  paddingTop: "30px",
}));
