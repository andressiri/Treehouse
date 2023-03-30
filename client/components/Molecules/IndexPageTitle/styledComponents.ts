import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  margin: "30px auto 0px auto",
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: "40px",
  color: theme.palette.primary.main,
  textAlign: "center",
  fontSize: "58px",
  fontWeight: 900,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  textAlign: "center",
  fontSize: "28px",
  fontWeight: 700,
}));
