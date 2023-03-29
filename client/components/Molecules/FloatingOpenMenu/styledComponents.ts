import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !["topPosition", "leftPosition"].includes(prop as string),
})<{ topPosition: number | null; leftPosition: number | null }>(
  ({ topPosition, leftPosition }) => ({
    zIndex: 99999,
    position: "fixed",
    top: topPosition ? `${topPosition}px` : "30px",
    left: leftPosition ? `${leftPosition}px` : "30px",
    borderRadius: "50%",
  })
);

export const StyledIconContainer = styled(IconButton)(({ theme }) => ({
  width: "50px !important",
  height: "50px",
  padding: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: `2px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "50%",
  "& svg": {
    width: "35px",
    height: "35px",
  },
  "&:hover": {
    background: theme.palette.primary.main,
    opacity: "1",
  },
}));
