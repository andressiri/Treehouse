import { styled } from "@mui/material/styles";

export const TextureContainer = styled("div", {
  shouldForwardProp: (prop) => !["imageSrc", "zIndex"].includes(prop as string),
})<{
  imageSrc: string;
  zIndex: number;
  bgWidth: string;
  bgHeight: string;
  opacity: string;
}>(({ imageSrc, zIndex, bgWidth, bgHeight, opacity }) => ({
  zIndex,
  position: "absolute",
  inset: "0px",
  background: `url(${imageSrc}) repeat`,
  backgroundSize: `${bgWidth} ${bgHeight}`,
  minHeight: "100%",
  minWidth: "100%",
  opacity,
}));
