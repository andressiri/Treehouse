import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  padding: "120px 0px 0px 320px",
}));

export const Sidebar = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: "0px",
  bottom: "0px",
  left: "0px",
  width: "320px",
  height: "100vh",
  padding: "30px 10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const Header = styled("header")(({ theme }) => ({
  position: "absolute",
  top: "0px",
  left: "320px",
  width: "calc(100% - 320px)",
  height: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  background: "transparent",
  color: theme.palette.primary.main,
}));
