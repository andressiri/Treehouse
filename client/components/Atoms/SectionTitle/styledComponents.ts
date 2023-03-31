import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: "30px",
  color: theme.palette.primary.main,
  textAlign: "center",
  fontSize: "52px",
  fontWeight: 700,
}));
