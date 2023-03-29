import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "../../../components/Atoms";
import { Container, StyledIconContainer } from "./styledComponents";
import useDragControllers from "./useDragControllers";

interface Props {
  isDrawerOpen: boolean;
  handleDrawer: () => void;
}

const FloatingOpenMenu: FC<Props> = ({ isDrawerOpen, handleDrawer }) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const dragControllers = useDragControllers();
  const { top, left, touchStart, isDragging, tooltipPosition } =
    dragControllers;

  return (
    <Container
      onMouseEnter={() => {
        if (isDragging.current) return;
        setDisplayTooltip(true);
      }}
      onMouseLeave={() => setDisplayTooltip(false)}
      onTouchStart={(e) => {
        setDisplayTooltip(false);
        touchStart(e);
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        setDisplayTooltip(false);
        touchStart(e);
      }}
      topPosition={top}
      leftPosition={left}
      onClick={() => {
        if (isDragging.current) return;
        handleDrawer();
      }}
    >
      <StyledIconContainer>
        {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
      </StyledIconContainer>
      {displayTooltip ? (
        <Tooltip tooltipPosition={tooltipPosition} width="80px">
          Open Menu
        </Tooltip>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default FloatingOpenMenu;
