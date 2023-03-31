import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Link from "next/link";

export const Container = styled(Box)(() => ({
  position: "relative",
  margin: "30px auto 0px auto",
  display: "flex",
  flexDirection: "column",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  position: "absolute",
  top: `calc(-${theme.custom.header.height} - 48px)`,
  left: "40px",
  margin: "50px auto 80px auto",
}));
