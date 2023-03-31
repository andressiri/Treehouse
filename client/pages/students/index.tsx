import { FC, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useGetStudentsWithRelationsEffect } from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";

const Students: FC = () => {
  const { students } = useContext(StudentsContext);
  useGetStudentsWithRelationsEffect();

  return (
    <Layout>
      <DisplayPage data={students} modelName="student" />
    </Layout>
  );
};

export default Students;
