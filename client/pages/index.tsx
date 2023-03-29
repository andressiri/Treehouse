import { FC } from "react";
import { IndexPageTitle } from "../components/Molecules";
import { RoomCardsDisplay } from "../components/Organisms";
import { Layout } from "../components/Templates";
import { Container } from "../components/Templates/MainPage/styledComponents";

const Home: FC = () => {
  return (
    <Layout>
      <Container>
        <IndexPageTitle />
        <RoomCardsDisplay />
      </Container>
    </Layout>
  );
};

export default Home;
