import { FC, useState } from "react";
import { BackgroundTexture } from "../../../components/Atoms";
import { FloatingOpenMenu } from "../../../components/Molecules";
import { Header, MobileDrawer, Sidebar } from "../../../components/Organisms";
import { Container, TextureContainer } from "./styledComponents";
import leavesPattern from "../../../assets/patterns/leavesPattern.webp";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => setIsDrawerOpen((prev: boolean) => !prev);

  return (
    <Container>
      <MobileDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      />
      <TextureContainer>
        <BackgroundTexture imageSrc={leavesPattern.src} opacity="0.9" />
      </TextureContainer>
      <Header />
      <FloatingOpenMenu
        isDrawerOpen={isDrawerOpen}
        handleDrawer={handleDrawer}
      />
      <Sidebar />
      {children}
    </Container>
  );
};

export default Layout;
