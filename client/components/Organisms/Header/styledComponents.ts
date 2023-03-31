import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  left: theme.custom.sidebar.width,
  width: `calc(100% - ${theme.custom.sidebar.width})`,
  height: theme.custom.header.height,
  padding: "10px 30px",
  display: "flex",
  gap: "20px",
  alignItems: "center",
  justifyContent: "flex-end",
  background: "transparent",
  color: theme.palette.primary.main,
  "@media (max-width: 1200px)": {
    display: "none",
  },
}));

export const StyledList = styled("ul")(() => ({
  display: "flex !important",
  flexDireciton: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  listStyleType: "none",
}));
