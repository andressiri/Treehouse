import { FC } from "react";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { ContainerList, StyledItem, NavItemButton } from "./styledComponents";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

const NavLinks: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  return (
    <ContainerList>
      <StyledItem
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        appearingTime={620}
      >
        <NavItemButton disableRipple startIcon={<CastForEducationIcon />}>
          Rooms
        </NavItemButton>
      </StyledItem>
      <StyledItem
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        appearingTime={680}
      >
        <NavItemButton disableRipple startIcon={<HistoryEduIcon />}>
          Teachers
        </NavItemButton>
      </StyledItem>
      <StyledItem
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        appearingTime={680}
      >
        <NavItemButton disableRipple startIcon={<LocalLibraryIcon />}>
          Students
        </NavItemButton>
      </StyledItem>
    </ContainerList>
  );
};

export default NavLinks;
