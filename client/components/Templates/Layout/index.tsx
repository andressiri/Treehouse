import { FC } from "react";
import { BackgroundTexture } from "../../../components/Atoms";
import { FloatingOpenMenu } from "../../../components/Molecules";
import { Header, Sidebar } from "../../../components/Organisms";
import {
  Container,
  NavTextureContainer,
  PageTextureContainer,
} from "./styledComponents";
import leavesPattern from "../../../assets/patterns/leavesPattern.webp";
import signalNoisePattern from "../../../assets/patterns/background-signal-noise-texture.png";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <NavTextureContainer>
        <BackgroundTexture
          imageSrc={signalNoisePattern.src}
          bgWidth="150px"
          bgHeight="150px"
        />
      </NavTextureContainer>
      <PageTextureContainer>
        <BackgroundTexture imageSrc={leavesPattern.src} opacity="0.9" />
      </PageTextureContainer>
      <Header />
      <FloatingOpenMenu />
      <Sidebar />
      {children}
    </Container>
  );
};

export default Layout;
