import { FC } from "react";
import { IndexPageTitle } from "../components/Molecules";
import { RoomCardsDisplay } from "../components/Organisms";
import { Layout } from "../components/Templates";
import { useResolveUnhandledErrors } from "../utils/hooks";

const Home: FC = () => {
  useResolveUnhandledErrors();

  return (
    <Layout>
      <IndexPageTitle />
      <RoomCardsDisplay />
    </Layout>
  );
};

export default Home;
