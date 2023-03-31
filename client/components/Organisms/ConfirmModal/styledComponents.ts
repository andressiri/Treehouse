import { styled } from "@mui/material/styles";
import { Backdrop, Box, IconButton, Typography } from "@mui/material";

export const StyledBackdrop = styled(Backdrop)(() => ({
  zIndex: 99999,
}));

export const InnerContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "500px",
  maxWidth: "90%",
  minHeight: "250px",
  padding: "80px 40px 40px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.contrastText.replace("0.87)", "1)"),
  color: theme.palette.secondary.contrastText,
  border: `2px solid ${theme.palette.secondary.contrastText}`,
  borderRadius: theme.custom.radius.medium,
}));

export const CloseContainer = styled(Box)(() => ({
  zIndex: 3,
  position: "absolute",
  top: "20px",
  right: "0px",
  width: "50px",
  height: "50px",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: "35px",
  height: "35px",
  marginRight: "-5px",
  color: theme.palette.secondary.contrastText,
  "& svg": {
    fontSize: "35px !important",
  },
}));

export const Text = styled(Typography)(() => ({
  textAlign: "center",
  fontSize: "22px",
  fontWeight: 600,
  marginBottom: "50px",
}));

export const ButtonsContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "40px",
}));
