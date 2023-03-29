import { styled } from "@mui/material/styles";
import { Box, IconButton, SwipeableDrawer } from "@mui/material";

export const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  "& .MuiPaper-root": {
    width: theme.custom.sidebar.width,
    background: theme.palette.primary.main.replace("1)", "0.3)"),
    color: "inherit",
  },
}));

export const CloseContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["isDrawerOpen", "appearingTime"].includes(prop as string),
})<{ isDrawerOpen?: boolean; appearingTime: number }>(
  ({ isDrawerOpen, appearingTime }) => ({
    zIndex: 3,
    position: "absolute",
    top: "10px",
    right: "0px",
    width: "50px",
    height: "50px",
    opacity: !isDrawerOpen ? "0" : "1",
    transition: `${appearingTime}ms all`,
  })
);

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: "35px",
  height: "35px",
  marginRight: "-5px",
  color: theme.palette.primary.contrastText,
  "& svg": {
    fontSize: "35px !important",
  },
}));
