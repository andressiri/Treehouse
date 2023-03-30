import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "100%",
  "@media (min-width: 768px)": {
    display: "flex",
  },
}));

export const InfoContainer = styled(Box)(() => ({}));

export const Description = styled(Typography)(() => ({
  margin: "0px auto 30px auto",
  fontSize: "18px",
  textAlign: "justify",
}));
