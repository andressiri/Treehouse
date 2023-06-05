import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const NavigationText = styled(Typography)(({ theme }) => ({
  margin: "10px auto",
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontSize: "22px",
  fontWeight: 600,
  textDecoration: "underline",
}));
