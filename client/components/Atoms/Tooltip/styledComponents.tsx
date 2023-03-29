import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { TooltipProps } from "../../../typings/tooltip";

const defaultWidth = "150px";
const defaultHeight = "25px";
const tail = 7;

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    ![
      "tooltipPosition",
      "top",
      "left",
      "width",
      "height",
      "beforeTop",
      "beforeLeft",
      "color",
    ].includes(prop as string),
})<TooltipProps>(
  ({
    theme,
    tooltipPosition,
    top,
    left,
    width,
    height,
    beforeTop,
    beforeLeft,
    color,
  }) => {
    const { primary, secondary } = theme.palette;

    const textColor =
      color === "secondary" || color === "contrastsPrimary"
        ? secondary.contrastText
        : color === "primaryContrast"
        ? primary.main
        : color === "secondaryContrast"
        ? secondary.main
        : primary.contrastText;

    const backgroundColor =
      color === "secondary"
        ? secondary.main
        : color === "primaryContrast" || color === "contrastsPrimary"
        ? primary.contrastText
        : color === "secondaryContrast" || color === "contrastsSecondary"
        ? secondary.contrastText
        : primary.main;

    return {
      position: "absolute",
      top:
        top ||
        (tooltipPosition === "top" || !tooltipPosition
          ? `calc(0% - ${tail - 1}px - ${height || defaultHeight})`
          : tooltipPosition === "bottom"
          ? `calc(100% + ${tail - 1}px)`
          : `calc(50% - ${height || defaultHeight} / 2)`),
      left:
        left ||
        (tooltipPosition === "left"
          ? `calc(0% - ${tail - 1}px - ${width || defaultWidth})`
          : tooltipPosition === "right"
          ? `calc(100% + ${tail - 1}px)`
          : `calc(50% - ${width || defaultWidth} / 2)`),
      width: width || defaultWidth,
      height: height || defaultHeight,
      paddingTop: "1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: textColor,
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "20px",
      textAlign: "center",
      background: backgroundColor,
      borderRadius: "4px",
      "&::before": {
        content: "''",
        position: "absolute",
        top:
          beforeTop ||
          (tooltipPosition === "top" || !tooltipPosition
            ? "calc(100% - 1px)"
            : tooltipPosition === "bottom"
            ? `-${tail * 2 - 1}px`
            : `calc(50% - ${tail}px)`),
        left:
          beforeLeft ||
          (tooltipPosition === "left"
            ? "calc(100% - 1px)"
            : tooltipPosition === "right"
            ? `-${tail * 2 - 1}px`
            : `calc(50% - ${tail}px)`),
        width: "0px",
        height: "0px",
        border: `${tail}px solid transparent`,
        borderColor:
          tooltipPosition === "top" || !tooltipPosition
            ? `${backgroundColor} transparent transparent transparent`
            : tooltipPosition === "bottom"
            ? `transparent transparent ${backgroundColor} transparent`
            : tooltipPosition === "left"
            ? `transparent transparent transparent ${backgroundColor}`
            : `transparent ${backgroundColor} transparent transparent`,
      },
    };
  }
);
