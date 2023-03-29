import { FC } from "react";
import { Container, Sidebar } from "./styledComponents";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Sidebar></Sidebar>
      {children}
    </Container>
  );
};

export default Layout;
