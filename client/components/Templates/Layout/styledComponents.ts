import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  padding: `${theme.custom.header.height} 0px 0px ${theme.custom.sidebar.width}`,
}));
