import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "1000px",
  maxWidth: "90%",
  margin: "auto",
  paddingBottom: "60px",
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  margin: "0px auto 60px auto",
  fontSize: "18px",
  textAlign: "justify",
}));

export const StudentsTitle = styled(Typography)(({ theme }) => ({
  margin: "20px auto 30px auto",
  color: theme.palette.secondary.contrastText,
  textAlign: "center",
  fontSize: "42px",
  fontWeight: 700,
}));

export const StudentsFallback = styled(Typography)(({ theme }) => ({
  marginBottom: "30px",
  color: theme.palette.primary.main,
  textAlign: "center",
  fontSize: "52px",
  fontWeight: 700,
}));