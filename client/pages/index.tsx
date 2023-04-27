import { FC, useContext } from "react";
import { RoomsContext } from "../contexts";
import {
  useGetRoomsWithRelationsEffect,
  useHandleRoomsResponseEffect,
} from "../services";
import { IndexPageTitle } from "../components/Molecules";
import { CardsDisplay } from "../components/Organisms";
import { Layout } from "../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  WITH_RELATIONS,
  ROOMS_ROUTE,
} from "../config/constants";
import { GetStaticProps } from "next";

interface Props {
  staticRooms?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Home: FC<Props> = ({ staticRooms }) => {
  const { rooms } = useContext(RoomsContext);

  useHandleRoomsResponseEffect({ errorToast: true });
  useGetRoomsWithRelationsEffect();

  return (
    <Layout>
      <main>
        <IndexPageTitle />
        <CardsDisplay
          displayArray={!rooms[0] ? staticRooms : rooms}
          modelName="room"
        />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}/${ROOMS_ROUTE}/${WITH_RELATIONS}`
  );
  const staticRooms = await res.json();

  return {
    props: {
      staticRooms,
    },
  };
};

export default Home;
