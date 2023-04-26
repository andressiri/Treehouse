import { FC, useContext } from "react";
import { RoomsContext } from "../../contexts";
import {
  useGetRoomsWithRelationsEffect,
  useHandleRoomsResponseEffect,
} from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  WITH_RELATIONS,
  ROOMS_ROUTE,
} from "../../config/constants";
import { GetStaticProps } from "next";

interface Props {
  staticRooms?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Rooms: FC<Props> = ({ staticRooms }) => {
  const { rooms } = useContext(RoomsContext);

  useGetRoomsWithRelationsEffect();
  useHandleRoomsResponseEffect({ errorToast: true });

  return (
    <Layout>
      <DisplayPage data={!rooms[0] ? staticRooms : rooms} modelName="room" />
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
