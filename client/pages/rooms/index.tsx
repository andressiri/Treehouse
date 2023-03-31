import { FC, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useGetRoomsWithRelationsEffect } from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";

const Rooms: FC = () => {
  const { rooms } = useContext(RoomsContext);
  useGetRoomsWithRelationsEffect();

  return (
    <Layout>
      <DisplayPage data={rooms} modelName="room" />
    </Layout>
  );
};

export default Rooms;
