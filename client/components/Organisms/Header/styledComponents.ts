import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
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
