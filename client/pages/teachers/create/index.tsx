import { FC } from "react";
import { Layout, CreateOrEditPage } from "../../../components/Templates";
import { useGetCreateTeacherComponentsProps } from "../../../utils/hooks";

const CreateTeacher: FC = () => {
  const componentsProps = useGetCreateTeacherComponentsProps();

  return (
    <Layout>
      <CreateOrEditPage {...componentsProps} />
    </Layout>
  );
};

export default CreateTeacher;
