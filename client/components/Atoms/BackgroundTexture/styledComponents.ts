import { styled } from "@mui/material/styles";

export const TextureContainer = styled("div", {
  shouldForwardProp: (prop) => !["imageSrc", "zIndex"].includes(prop as string),
})<{ imageSrc: string; zIndex: number }>(({ imageSrc, zIndex }) => ({
  zIndex,
  position: "absolute",
  inset: "0px",
  background: `url(${imageSrc}) repeat`,
  minHeight: "100%",
  minWidth: "100%",
}));
