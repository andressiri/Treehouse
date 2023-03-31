import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: "20px auto 30px auto",
  color: theme.palette.secondary.contrastText,
  textAlign: "center",
  fontSize: "42px",
  fontWeight: 700,
}));

export const FormContainer = styled(Box)(() => ({
  width: "700px",
  maxWidth: "90%",
  display: "flex",
  gap: "30px",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px auto 60px auto",
}));
