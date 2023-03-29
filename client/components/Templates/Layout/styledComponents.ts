import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  padding: `${theme.custom.header.height} 0px 0px ${theme.custom.sidebar.width}`,
}));

export const Sidebar = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: "0px",
  bottom: "0px",
  left: "0px",
  width: theme.custom.sidebar.width,
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
  left: theme.custom.sidebar.width,
  width: `calc(100% - ${theme.custom.sidebar.width})`,
  height: theme.custom.header.height,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  background: "transparent",
  color: theme.palette.primary.main,
}));
