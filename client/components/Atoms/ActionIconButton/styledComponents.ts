import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));
