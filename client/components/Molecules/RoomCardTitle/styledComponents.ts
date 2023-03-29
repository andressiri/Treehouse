import { styled } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "56px",
  display: "flex",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const Title = styled(Typography)(() => ({
  margin: "auto",
  textAlign: "center",
  fontSize: "32px",
  fontWeight: 700,
}));

export const ButtonContainer = styled(Box)(() => ({
  zIndex: 3,
  position: "absolute",
  top: "0px",
  right: "0px",
}));

export const StyledLink = styled(Link)(() => ({
  position: "relative",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: "56px",
  height: "56px",
  color: theme.palette.primary.contrastText,
  "& svg": {
    width: "30px",
    height: "30px",
  },
}));
