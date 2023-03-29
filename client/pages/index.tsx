import { FC } from "react";
import { IndexPageTitle } from "../components/Molecules";
import { RoomCardsDisplay } from "../components/Organisms";
import { Layout } from "../components/Templates";

const Home: FC = () => {
  return (
    <Layout>
      <IndexPageTitle />
      <RoomCardsDisplay />
    </Layout>
  );
};

export default Home;
