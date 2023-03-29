import { FC } from "react";
import { Layout } from "../components/Templates";
import { Container } from "../components/Templates/MainPage/styledComponents";

const Home: FC = () => {
  return (
    <Layout>
      <Container>
        <h1>Hello Treehouse</h1>
      </Container>
    </Layout>
  );
};

export default Home;
