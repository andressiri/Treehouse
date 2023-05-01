import { FC, useContext } from "react";
import { RoomsContext } from "../contexts";
import { useGetRoomsWithRelationsEffect } from "../services";
import { IndexPageTitle } from "../components/Molecules";
import { CardsDisplay } from "../components/Organisms";
import { Layout } from "../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  WITH_RELATIONS,
  ROOMS_ROUTE,
  ROOM_ENTITY,
} from "../config/constants";
import { GetStaticProps } from "next";
import { IRoomWithRelations } from "../typings/rooms";

interface Props {
  staticRooms: IRoomWithRelations[];
}

const Home: FC<Props> = ({ staticRooms }) => {
  const { roomsWithRelations } = useContext(RoomsContext);

  useGetRoomsWithRelationsEffect({ errorToast: true });

  return (
    <Layout>
      <main>
        <IndexPageTitle />
        <CardsDisplay
          displayArray={
            !roomsWithRelations[0]
              ? staticRooms
              : (roomsWithRelations as IRoomWithRelations[])
          }
          entityName={ROOM_ENTITY}
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
