import { FC, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useGetRoomsWithRelationsEffect } from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  WITH_RELATIONS,
  ROOMS_ROUTE,
  ROOM_ENTITY,
} from "../../config/constants";
import { GetStaticProps } from "next";
import { IRoomWithRelations } from "../../typings/rooms";

interface Props {
  staticRooms: IRoomWithRelations[];
}

const Rooms: FC<Props> = ({ staticRooms }) => {
  const { rooms } = useContext(RoomsContext);

  useGetRoomsWithRelationsEffect({ errorToast: true });

  return (
    <Layout>
      <DisplayPage
        data={!rooms[0] ? staticRooms : (rooms as IRoomWithRelations[])}
        entityName={ROOM_ENTITY}
      />
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

export default Rooms;
