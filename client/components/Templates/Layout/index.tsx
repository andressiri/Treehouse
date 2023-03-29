import { FC } from "react";
import { Header, Sidebar } from "../../../components/Organisms";
import { Container } from "./styledComponents";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Sidebar />
      {children}
    </Container>
  );
};

export default Layout;
