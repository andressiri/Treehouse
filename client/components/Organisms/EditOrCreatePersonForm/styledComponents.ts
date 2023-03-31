import { styled } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "700px",
  maxWidth: "90%",
  margin: "60px auto 0px auto",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  alignItems: "center",
}));

export const ImageContainer = styled(Box)(() => ({
  position: "relative",
  transform: "scale(1.5)",
  cursor: "pointer",
}));

export const StyledFileInput = styled("input")(() => ({
  display: "none",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "38px",
  right: "38px",
  width: "35px",
  height: "35px",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "& svg": {
    width: "23px",
    height: "23px",
  },
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
