import { styled } from "@mui/material/styles";
import { Backdrop } from "@mui/material";

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: 99999,
  color: theme.palette.primary.contrastText,
}));
