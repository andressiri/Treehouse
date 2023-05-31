import { FC } from "react";
import { useGetRegisterComponentsProps } from "../../utils/hooks";
import { Layout, CreateOrEditPage } from "../../components/Templates";

const Register: FC = () => {
  const componentsProps = useGetRegisterComponentsProps();

  return (
    <Layout>
      <CreateOrEditPage {...componentsProps} />
    </Layout>
  );
};

export default Register;
