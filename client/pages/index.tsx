import { FC, useContext } from "react";
import { RoomsContext } from "../contexts";
import { useGetRoomsWithRelationsEffect } from "../services";
import { useResolveUnhandledErrors } from "../utils/hooks";
import { IndexPageTitle } from "../components/Molecules";
import { RoomCardsDisplay } from "../components/Organisms";
import { Layout } from "../components/Templates";

const Home: FC = () => {
  const { rooms, isLoading } = useContext(RoomsContext);
  useGetRoomsWithRelationsEffect();
  useResolveUnhandledErrors();

  return (
    <Layout>
      {isLoading ? (
        <></>
      ) : (
        <main>
          <IndexPageTitle />
          <RoomCardsDisplay roomsArray={rooms} />
        </main>
      )}
    </Layout>
  );
};

export default Home;
