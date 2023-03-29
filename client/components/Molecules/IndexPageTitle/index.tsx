import { FC } from "react";
import { Container, Title, Subtitle } from "./styledComponents";

const IndexPageTitle: FC = () => {
  return (
    <Container>
      <Title>Welcome to TreeHouse!</Title>
      <Subtitle>This are our courses available at the moment</Subtitle>
    </Container>
  );
};

export default IndexPageTitle;
