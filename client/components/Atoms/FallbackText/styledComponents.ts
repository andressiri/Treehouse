import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Text = styled(Typography)(({ theme }) => ({
  margin: "30px auto 80px auto",
  color: theme.palette.secondary.contrastText.replace("0.87)", "0.5)"),
  textAlign: "center",
  fontSize: "22px",
  fontWeight: 600,
  letterSpacing: "1px",
}));
