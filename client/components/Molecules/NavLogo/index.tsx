import { FC } from "react";
import TreehouseLogo from "../../../assets/logos/TreehouseLogo";
import { Container, LogoContainer, Name } from "./styledComponents";
import Link from "next/link";

const NavLogo: FC = () => {
  return (
    <Container>
      <Link href="/">
        <LogoContainer>
          <TreehouseLogo />
        </LogoContainer>
      </Link>
      <Link href="/">
        <Name>TreeHouse</Name>
      </Link>
    </Container>
  );
};

export default NavLogo;
