import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
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
  background: theme.palette.primary.main.replace("1)", "0.9)"),
  color: theme.palette.primary.contrastText,
}));
