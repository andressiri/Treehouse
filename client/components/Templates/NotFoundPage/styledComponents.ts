import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  paddingBottom: theme.custom.header.height,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const TextContainer = styled(Box)(() => ({
  marginTop: "25px",
  display: "flex",
  gap: "9px",
  alignItems: "center",
}));

export const ErrorNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontSize: "24px",
  fontWeight: 800,
}));

export const NotFound = styled(ErrorNumber)(() => ({
  fontWeight: 600,
}));
