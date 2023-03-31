import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Link from "next/link";

export const StyledLink = styled(Link)(() => ({
  position: "relative",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));
