import { styled } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "550px",
  maxWidth: "95%",
  background: theme.palette.primary.contrastText,
  borderRadius: theme.custom.radius.medium,
  overflow: "hidden",
  boxShadow:
    "rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px",
}));

export const InfoContainer = styled(Box)(() => ({
  display: "flex",
}));

export const DescriptionContainer = styled(Box)(() => ({
  position: "relative",
  height: "250px",
  padding: "20px 20px 20px 10px",
}));

export const FadeShadow = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "0px",
  bottom: "0px",
  left: "0px",
  width: "100%",
  height: "80px",
  background: `linear-gradient( ${theme.palette.primary.contrastText.replace(
    "0.87)",
    "0.5)"
  )}, ${
    theme.palette.primary.contrastText
  } 60%, ${theme.palette.primary.contrastText.replace("0.87)", "1)")} 75%)`,
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontSize: "16px",
  textAlign: "justify",
  whiteSpace: "pre-line",
}));

export const DescriptionIconButton = styled(IconButton)(({ theme }) => ({
  zIndex: 3,
  position: "absolute",
  bottom: "20px",
  right: "20px",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));
