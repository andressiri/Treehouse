import { FC } from "react";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";

const CreateTeacher: FC = () => {
  return (
    <Layout>
      <EditOrCreatePersonPage modelName="teacher" />
    </Layout>
  );
};

export default CreateTeacher;
