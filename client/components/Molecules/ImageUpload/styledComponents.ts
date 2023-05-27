import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const ImageContainer = styled(Box)(() => ({
  position: "relative",
  cursor: "pointer",
}));

export const StyledFileInput = styled("input")(() => ({
  display: "none",
}));

export const PersonImageContainer = styled(Box)(() => ({
  transform: "scale(1.5)",
}));

export const StyledDeleteButton = styled(IconButton, {
  shouldForwardProp: (prop) => !["isPerson"].includes(prop as string),
})<{ isPerson: boolean }>(({ theme, isPerson }) => ({
  position: "absolute",
  top: isPerson ? "0px" : "10px",
  left: isPerson ? "-10px" : "10px",
  width: "50px",
  height: "50px",
  background: theme.palette.error.main,
  color: theme.palette.primary.contrastText,
  "& svg": {
    width: "32px",
    height: "32px",
  },
  "&:hover": {
    background: theme.palette.primary.contrastText,
    color: theme.palette.error.main,
  },
}));

export const StyledUploadButton = styled(StyledDeleteButton, {
  shouldForwardProp: (prop) =>
    !["imageUploaded", "isPerson"].includes(prop as string),
})<{ imageUploaded: boolean; isPerson: boolean }>(
  ({ theme, imageUploaded, isPerson }) => ({
    left: "unset",
    right: isPerson ? "-10px" : "10px",
    background: !imageUploaded
      ? theme.palette.primary.main
      : theme.palette.error.main,
    "&:hover": {
      background: theme.palette.primary.contrastText,
      color: !imageUploaded
        ? theme.palette.primary.main
        : theme.palette.error.main,
    },
  })
);
