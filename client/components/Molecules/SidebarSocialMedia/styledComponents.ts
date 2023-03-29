import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  margin: "0px",
  display: "flex",
  gap: "18px",
  color: theme.palette.primary.contrastText,
  "& svg": {
    width: "40px",
    height: "40px",
  },
}));

export const StyledAnchor = styled("a")(() => ({
  position: "relative",
}));
