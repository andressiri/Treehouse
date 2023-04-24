import { FC } from "react";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";

const CreateStudent: FC = () => {
  return (
    <Layout>
      <EditOrCreatePersonPage modelName="student" />
    </Layout>
  );
};

export default CreateStudent;
