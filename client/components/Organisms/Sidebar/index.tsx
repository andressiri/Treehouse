import { FC } from "react";
import { Container } from "./styledComponents";
import { NavLogo } from "../../../components/Molecules";

const Sidebar: FC = () => {
  return (
    <Container component="nav">
      <NavLogo />
    </Container>
  );
};

export default Sidebar;
