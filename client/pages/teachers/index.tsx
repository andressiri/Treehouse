import { FC, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useGetTeachersWithRelationsEffect } from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";

const Teachers: FC = () => {
  const { teachers } = useContext(TeachersContext);
  useGetTeachersWithRelationsEffect();

  return (
    <Layout>
      <DisplayPage data={teachers} modelName="teacher" />
    </Layout>
  );
};

export default Teachers;
