import { FC } from "react";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";
import { STUDENT_ENTITY } from "../../../config/constants";

const CreateStudent: FC = () => {
  return (
    <Layout>
      <EditOrCreatePersonPage entityName={STUDENT_ENTITY} />
    </Layout>
  );
};

export default CreateStudent;
