import { FC } from "react";
import { SwipeableDrawerProps } from "@mui/material";
import { SidebarContent } from "../../../components/Organisms";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledSwipeableDrawer,
  CloseContainer,
  StyledIconButton,
} from "./styledComponents";

const MobileDrawer: FC<SwipeableDrawerProps> = (props) => {
  return (
    <StyledSwipeableDrawer {...props} anchor="left">
      <CloseContainer isDrawerOpen={props.open} appearingTime={700}>
        <StyledIconButton onClick={(e) => props.onClose(e)}>
          <CloseIcon />
        </StyledIconButton>
      </CloseContainer>
      <SidebarContent isDrawer={true} isDrawerOpen={props.open} />
    </StyledSwipeableDrawer>
  );
};

export default MobileDrawer;
