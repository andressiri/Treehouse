import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  paddingLeft: "320px",
}));
export const Sidebar = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  width: "320px",
  height: "100vh",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));
