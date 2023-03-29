import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Tooltip } from "../../../components/Atoms";
import { Container, StyledIconContainer } from "./styledComponents";
import useDragControllers from "./useDragControllers";

const FloatingOpenMenu: FC = () => {
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
        e.preventDefault();
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
    >
      <StyledIconContainer>
        <MenuIcon />
      </StyledIconContainer>
      {displayTooltip ? (
        <Tooltip tooltipPosition={tooltipPosition}>Open Menu</Tooltip>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default FloatingOpenMenu;
