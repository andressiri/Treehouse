import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  minHeight: "100vh",
  padding: `${theme.custom.header.height} 0px 0px ${theme.custom.sidebar.width}`,
  "@media (max-width: 1024px)": {
    padding: `${theme.custom.header.height} 0px 0px 0px`,
  },
}));

export const TextureContainer = styled(Box)(({ theme }) => ({
  zIndex: -1,
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: theme.custom.sidebar.width,
  width: `calc(100% - ${theme.custom.sidebar.width})`,
  height: "100%",
  "@media (max-width: 1024px)": {
    left: "0px",
    width: "100%",
  },
}));
