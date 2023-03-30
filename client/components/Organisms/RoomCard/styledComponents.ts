import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

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
