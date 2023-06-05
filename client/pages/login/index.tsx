import { FC } from "react";
import { useGetLoginComponentsProps } from "../../utils/hooks";
import { Layout, LoginPage } from "../../components/Templates";

const Login: FC = () => {
  const componentsProps = useGetLoginComponentsProps();

  return (
    <Layout>
      <LoginPage {...componentsProps} />
    </Layout>
  );
};

export default Login;
