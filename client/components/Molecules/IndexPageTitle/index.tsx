import { FC } from "react";
import { Container, Title, Subtitle } from "./styledComponents";

const IndexPageTitle: FC = () => {
  return (
    <Container>
      <Title>Welcome to TreeHouse!</Title>
      <Subtitle>These are our currently available courses</Subtitle>
    </Container>
  );
};

export default IndexPageTitle;
