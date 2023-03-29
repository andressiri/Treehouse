import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  padding: `${theme.custom.header.height} 0px 0px ${theme.custom.sidebar.width}`,
}));

export const TextureContainer = styled(Box)(() => ({
  zIndex: -1,
  position: "absolute",
  top: "0px",
  bottom: "0px",
  height: "100%",
}));

export const NavTextureContainer = styled(TextureContainer)(({ theme }) => ({
  left: "0px",
  width: theme.custom.sidebar.width,
}));

export const PageTextureContainer = styled(Box)(({ theme }) => ({
  right: "0px",
  left: theme.custom.sidebar.width,
  width: `calc(100% - ${theme.custom.sidebar.width})`,
}));
