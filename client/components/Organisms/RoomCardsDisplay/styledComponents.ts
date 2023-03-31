import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "100%",
  padding: "50px",
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  flexWrap: "wrap",
}));
