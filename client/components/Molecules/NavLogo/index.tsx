import { FC } from "react";
import TreehouseLogo from "../../../assets/logos/TreehouseLogo";
import { Container, LogoContainer, Name } from "./styledComponents";

const NavLogo: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <TreehouseLogo />
      </LogoContainer>
      <Name>TreeHouse</Name>
    </Container>
  );
};

export default NavLogo;
