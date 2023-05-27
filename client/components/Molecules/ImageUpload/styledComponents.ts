import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const ImageContainer = styled(Box)(() => ({
  position: "relative",
  cursor: "pointer",
}));

export const StyledFileInput = styled("input")(() => ({
  display: "none",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "38px",
  right: "38px",
  width: "35px",
  height: "35px",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "& svg": {
    width: "23px",
    height: "23px",
  },
}));
