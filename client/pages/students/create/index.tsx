import { FC } from "react";
import { useGetCreateStudentComponentsProps } from "../../../utils/hooks";
import { Layout, CreateOrEditPage } from "../../../components/Templates";

const CreateStudent: FC = () => {
  const componentsProps = useGetCreateStudentComponentsProps();

  return (
    <Layout>
      <CreateOrEditPage {...componentsProps} />
    </Layout>
  );
};

export default CreateStudent;
