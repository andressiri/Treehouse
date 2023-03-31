import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Link from "next/link";

export const Container = styled(Box)(() => ({
  margin: "30px auto 0px auto",
  display: "flex",
  flexDirection: "column",
}));

export const StyledLink = styled(Link)(() => ({
  margin: "50px auto 80px auto",
}));
