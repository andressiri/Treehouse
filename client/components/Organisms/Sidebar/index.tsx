import { FC } from "react";
import { NavLinks, NavLogo } from "../../../components/Molecules";
import { Container, StyledDivider } from "./styledComponents";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

const Sidebar: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  return (
    <Container component="nav">
      <NavLogo />
      <StyledDivider isDrawerOpen={isDrawerOpen} appearingTime={590} />
      <NavLinks isDrawer={isDrawer} isDrawerOpen={isDrawerOpen} />
    </Container>
  );
};

export default Sidebar;
