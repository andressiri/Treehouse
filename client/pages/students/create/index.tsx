import { FC, useContext } from "react";
import { RoomsContext } from "../../../contexts";
import { useGetRoomsWithRelationsEffect } from "../../../services";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";

const CreateStudent: FC = () => {
  const { rooms } = useContext(RoomsContext);
  useGetRoomsWithRelationsEffect();

  return (
    <Layout>
      <EditOrCreatePersonPage rooms={rooms} modelName="student" />
    </Layout>
  );
};

export default CreateStudent;
