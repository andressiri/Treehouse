import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "700px",
  maxWidth: "90%",
  margin: "60px auto 0px auto",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  alignItems: "center",
}));

export const ActionsContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  gap: "50px",
  alignItems: "center",
  justifyContent: "center",
}));

export const ErrorContainer = styled(Box)(() => ({
  width: "100%",
  height: "56px",
  margin: "-25px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  textAlign: "center",
  fontSize: "20px",
  fontWeight: 600,
}));
