import { FC } from "react";
import { SidebarContent } from "../../../components/Organisms";
import { Container } from "./styledComponents";

const Sidebar: FC = () => {
  return (
    <Container component="aside">
      <SidebarContent isDrawer={false} isDrawerOpen={true} />
    </Container>
  );
};

export default Sidebar;
