import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "30px auto 60px auto",
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: "20px auto 30px auto",
  color: theme.palette.secondary.contrastText,
  textAlign: "center",
  fontSize: "42px",
  fontWeight: 700,
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  margin: "0px auto 30px auto",
  fontSize: "18px",
  textAlign: "justify",
}));
