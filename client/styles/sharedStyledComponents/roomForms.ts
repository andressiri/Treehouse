import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  margin: "30px auto 0px auto",
  paddingBottom: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: "250px",
  marginTop: "40px",
  border: `1px solid ${theme.palette.secondary.contrastText}`,
  borderRadius: theme.custom.radius.medium,
  overflow: "hidden",
}));
