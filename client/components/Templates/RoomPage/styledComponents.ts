import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
}));

export const InnerContainer = styled(Box)(() => ({
  width: "1000px",
  maxWidth: "90%",
  margin: "auto",
  paddingBottom: "60px",
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  margin: "30px auto 60px auto",
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

export const ActionsContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: `calc(-${theme.custom.header.height} + 32px)`,
  left: "40px",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  alignItems: "center",
  width: "fit-content",
}));
