import { FC } from "react";
import { useGetRegisterComponentsProps } from "../../utils/hooks";
import { Layout, RegisterPage } from "../../components/Templates";

const Register: FC = () => {
  const componentsProps = useGetRegisterComponentsProps();

  return (
    <Layout>
      <RegisterPage {...componentsProps} />
    </Layout>
  );
};

export default Register;
