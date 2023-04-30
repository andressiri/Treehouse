import { FC } from "react";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";
import { TEACHER_ENTITY } from "../../../config/constants";

const CreateTeacher: FC = () => {
  return (
    <Layout>
      <EditOrCreatePersonPage entityName={TEACHER_ENTITY} />
    </Layout>
  );
};

export default CreateTeacher;
