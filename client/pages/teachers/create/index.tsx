import { FC, useContext } from "react";
import { RoomsContext } from "../../../contexts";
import { useGetRoomsWithRelationsEffect } from "../../../services";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";

const CreateTeacher: FC = () => {
  const { rooms } = useContext(RoomsContext);
  useGetRoomsWithRelationsEffect();

  return (
    <Layout>
      <EditOrCreatePersonPage rooms={rooms} modelName="teacher" />
    </Layout>
  );
};

export default CreateTeacher;
