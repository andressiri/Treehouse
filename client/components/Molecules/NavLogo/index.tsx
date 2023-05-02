import { FC } from "react";
import TreehouseLogo from "../../../assets/logos/TreehouseLogo";
import { Container, LogoContainer, Name } from "./styledComponents";
import Link from "next/link";

interface Props {
  color?: string;
}

const NavLogo: FC<Props> = ({ color }) => {
  return (
    <Container colour={color}>
      <Link href="/">
        <LogoContainer>
          <TreehouseLogo />
        </LogoContainer>
      </Link>
      <Link href="/">
        <Name colour={color}>TreeHouse</Name>
      </Link>
    </Container>
  );
};

export default NavLogo;
