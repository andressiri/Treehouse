import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GeneralContext } from "../../../contexts";
import { TooltipProps } from "../../../typings/tooltip";

type TooltipPosition = TooltipProps["tooltipPosition"];

interface IPosition {
  x: number;
  y: number;
}

const useDragControllers = () => {
  const { viewportWidth, viewportHeight } = useContext(GeneralContext);
  const [tooltipPosition, setTooltipPosition] =
    useState<TooltipPosition>("right");
  const [top, setTop] = useState<number | null>(null);
  const [left, setLeft] = useState<number | null>(null);
  const startPosition = useRef<IPosition>({ x: 0, y: 0 });
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    if (top === null || left === null) return;

    if (top > 35 && left > 50 && viewportWidth - left > 125) {
      setTooltipPosition("top");
      return;
    }

    if (top <= 35 && left > 50 && viewportWidth - left > 125) {
      setTooltipPosition("bottom");
      return;
    }

    if (left > viewportWidth / 2) {
      setTooltipPosition("left");
      return;
    }

    setTooltipPosition("right");
  }, [top, left, viewportWidth]);

  useEffect(() => {
    if (top === null || left === null) return;

    if (viewportWidth - left < 80) setLeft(viewportWidth - 80);
    if (viewportHeight - top < 80) setTop(viewportHeight - 80);
  }, [viewportWidth, viewportHeight, left, top]);

  const getPosition = useCallback(
    (
      event:
        | MouseEvent
        | TouchEvent
        | React.MouseEvent<HTMLDivElement, MouseEvent>
        | React.TouchEvent<HTMLDivElement>
    ) => {
      return event.type.includes("mouse")
        ? {
            x: (event as MouseEvent).clientX,
            y: (event as MouseEvent).clientY,
          }
        : {
            x: (event as TouchEvent).touches[0].clientX,
            y: (event as TouchEvent).touches[0].clientY,
          };
    },
    []
  );

  const touchMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const actualPosition = getPosition(event);

      if (
        !isDragging.current &&
        Math.abs(startPosition.current.x - actualPosition.x) < 15 &&
        Math.abs(startPosition.current.y - actualPosition.y) < 15
      )
        return;

      if (!isDragging.current) isDragging.current = true;

      const topToSet =
        actualPosition.y - 30 > 10 &&
        actualPosition.y - 30 < viewportHeight - 80
          ? actualPosition.y - 30
          : actualPosition.y - 30 <= 10
          ? 10
          : viewportHeight - 80;

      const leftToSet =
        actualPosition.x - 30 > 10 && actualPosition.x - 30 < viewportWidth - 80
          ? actualPosition.x - 30
          : actualPosition.x - 30 <= 10
          ? 10
          : viewportWidth - 80;

      setTop(topToSet);
      setLeft(leftToSet);
    },
    [viewportWidth, viewportHeight, getPosition]
  );

  const touchEnd = useCallback(() => {
    setTimeout(() => (isDragging.current = false), 100);
    setTimeout(() => (isDragging.current = false), 350);
    window.removeEventListener("mousemove", touchMove);
    window.removeEventListener("touchmove", touchMove);
    window.removeEventListener("mouseup", touchEnd);
    window.removeEventListener("touchend", touchEnd);
  }, [touchMove]);

  const touchStart = useCallback(
    (
      event:
        | React.MouseEvent<HTMLDivElement, MouseEvent>
        | React.TouchEvent<HTMLDivElement>
    ) => {
      startPosition.current = getPosition(event);
      setTimeout(() => {
        isDragging.current = true;
      }, 300);
      window.addEventListener("mousemove", touchMove);
      window.addEventListener("touchmove", touchMove);
      window.addEventListener("mouseup", touchEnd);
      window.addEventListener("touchend", touchEnd);
    },
    [getPosition, touchEnd, touchMove]
  );

  const dragControllers = {
    top,
    left,
    touchStart,
    tooltipPosition,
    isDragging,
  };

  return dragControllers;
};

export default useDragControllers;
