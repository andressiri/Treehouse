import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)(() => ({
  minWidth: "247px",
  height: "250px",
  paddingBottom: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledImage = styled(Image)(() => ({
  width: "180px",
  height: "180px",
  objectFit: "contain",
  borderRadius: "50%",
}));

export const Name = styled(Typography)(({ theme }) => ({
  marginTop: "-35px",
  padding: "3px 8px",
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  fontSize: "20px",
  fontWeight: 700,
  border: `2px solid ${theme.palette.secondary.contrastText}`,
  borderRadius: "8px",
}));
