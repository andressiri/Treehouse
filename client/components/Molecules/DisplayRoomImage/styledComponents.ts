import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)(() => ({
  position: "relative",
  minWidth: "550px",
  minHeight: "250px",
}));

export const StyledImage = styled(Image)(() => ({
  width: "550px",
  height: "250px",
  objectFit: "cover",
}));

export const Name = styled(Typography)(({ theme }) => ({
  position: "absolute",
  padding: "3px 8px",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: "26px",
  fontWeight: 700,
  borderRadius: "8px",
}));
