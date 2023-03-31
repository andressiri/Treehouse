import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: "flex",
  gap: "15px",
  marginBottom: "5px",
}));

export const Age = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontSize: "22px",
  fontWeight: 600,
  "& span": {
    color: theme.palette.primary.main,
  },
}));

export const Gender = styled(Age)(() => ({}));
