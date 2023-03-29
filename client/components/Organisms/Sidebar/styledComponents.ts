import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0px",
  bottom: "0px",
  left: "0px",
  width: theme.custom.sidebar.width,
  minHeight: "100vh",
  "@media (max-width: 1024px)": {
    display: "none",
  },
}));
