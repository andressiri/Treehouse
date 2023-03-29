import { styled } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

export const Container = styled(Box)(() => ({
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

export const ButtonContainer = styled(Box)(() => ({
  zIndex: 3,
  position: "absolute",
  bottom: "20px",
  right: "20px",
}));

export const StyledLink = styled(Link)(() => ({
  position: "relative",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));
