import { FC } from "react";
import { useTheme } from "@mui/material";
import { NavLogo } from "../../Molecules";
import {
  Container,
  ErrorNumber,
  NotFound,
  TextContainer,
} from "./styledComponents";

const NotFoundPage: FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <NavLogo color={theme.palette.primary.main} />
      <TextContainer>
        <ErrorNumber>404</ErrorNumber>
        <NotFound>- This page could not be found.</NotFound>
      </TextContainer>
    </Container>
  );
};

export default NotFoundPage;
