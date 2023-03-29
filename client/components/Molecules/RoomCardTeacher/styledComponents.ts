import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)(() => ({
  minWidth: "45%",
  height: "250px",
  paddingBottom: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const TeacherImage = styled(Image)(() => ({
  width: "180px",
  height: "180px",
  objectFit: "contain",
  borderRadius: "50%",
}));

export const TeacherName = styled(Typography)(({ theme }) => ({
  marginTop: "-35px",
  padding: "3px 8px",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: "20px",
  fontWeight: 700,
  border: `5px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "8px",
}));
