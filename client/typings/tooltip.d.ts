export interface TooltipProps {
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  beforeTop?: string;
  beforeLeft?: string;
  color?:
    | "primary"
    | "secondary"
    | "primaryContrast"
    | "secondaryContrast"
    | "contrastsPrimary"
    | "contrastsSecondary";
}
