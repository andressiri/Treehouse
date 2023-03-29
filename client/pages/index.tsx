import { FC } from "react";
import { Layout } from "../components/Templates";
import { Container } from "../components/Templates/MainPage/styledComponents";
import { IndexPageTitle } from "../components";

const Home: FC = () => {
  return (
    <Layout>
      <Container>
        <IndexPageTitle />
      </Container>
    </Layout>
  );
};

export default Home;
