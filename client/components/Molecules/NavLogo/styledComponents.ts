import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => !["colour"].includes(prop as string),
})<{ colour?: string }>(({ theme, colour }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: colour || theme.palette.primary.contrastText,
}));

export const LogoContainer = styled(Box)(() => ({
  width: "60px",
  height: "60px",
  marginBottom: "-4px",
  cursor: "pointer",
  "& svg": {
    width: "60px",
    height: "60px",
  },
}));

export const Name = styled(Typography, {
  shouldForwardProp: (prop) => !["colour"].includes(prop as string),
})<{ colour?: string }>(({ theme, colour }) => ({
  width: "fit-content",
  padding: "3px 8px",
  color: colour || theme.palette.primary.contrastText,
  fontSize: "32px",
  lineHeight: "32px",
  fontWeight: 900,
  letterSpacing: "-0.45px",
  whiteSpace: "nowrap",
  border: `5px solid ${colour || theme.palette.primary.contrastText}`,
  borderRadius: "8px",
  cursor: "pointer",
}));
