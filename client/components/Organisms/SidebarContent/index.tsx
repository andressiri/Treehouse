import { FC } from "react";
import { BackgroundTexture } from "../../../components/Atoms";
import { NavLinks, NavLogo } from "../../../components/Molecules";
import { Container, LogoContainer, StyledDivider } from "./styledComponents";
import signalNoisePattern from "../../../assets/patterns/background-signal-noise-texture.png";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

const SidebarContent: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  return (
    <Container component="nav">
      <BackgroundTexture
        imageSrc={signalNoisePattern.src}
        bgWidth="150px"
        bgHeight="150px"
      />
      <LogoContainer isDrawerOpen={isDrawerOpen} appearingTime={500}>
        <NavLogo />
      </LogoContainer>
      <StyledDivider isDrawerOpen={isDrawerOpen} appearingTime={550} />
      <NavLinks isDrawer={isDrawer} isDrawerOpen={isDrawerOpen} />
    </Container>
  );
};

export default SidebarContent;
