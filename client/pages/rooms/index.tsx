import { FC, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useGetRoomsWithRelationsEffect } from "../../services";
import { Layout, RoomsPage } from "../../components/Templates";

const Rooms: FC = () => {
  const { rooms } = useContext(RoomsContext);
  useGetRoomsWithRelationsEffect();

  return (
    <Layout>
      <RoomsPage rooms={rooms} />
    </Layout>
  );
};

export default Rooms;
