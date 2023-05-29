import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  margin: "30px auto 0px auto",
  paddingBottom: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ImageContainer = styled(Box, {
  shouldForwardProp: (prop) => !["isPerson"].includes(prop as string),
})<{ isPerson?: boolean }>(({ theme, isPerson }) => ({
  width: isPerson ? "272px" : "unset",
  height: isPerson ? "272px" : "250px",
  paddingTop: isPerson ? "18px" : "unset",
  marginTop: "40px",
  border: `1px solid ${theme.palette.secondary.contrastText}`,
  borderRadius: isPerson ? "50%" : theme.custom.radius.medium,
  overflow: isPerson ? "unset" : "hidden",
}));
