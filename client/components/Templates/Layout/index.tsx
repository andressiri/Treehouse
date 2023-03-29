import { FC } from "react";
import { Container, Sidebar } from "./styledComponents";
import { NavLogo } from "../../../components/Molecules";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <NavLogo />
      </Sidebar>
      {children}
    </Container>
  );
};

export default Layout;
