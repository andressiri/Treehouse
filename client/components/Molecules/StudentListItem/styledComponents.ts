import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "400px",
  height: "56px",
  padding: "5px 10px 5px 25px",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  background: theme.palette.primary.contrastText.replace("0.87)", "1)"),
  border: `1px solid ${theme.palette.secondary.contrastText}`,
  borderRadius: theme.custom.radius.medium,
  boxShadow:
    "rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px",
}));

export const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontSize: "20px",
  fontWeight: 500,
}));

export const ActionsContainer = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  gap: "5px",
  marginLeft: "auto",
}));
