import { FC } from "react";
import { Container } from "./styledComponents";
import { TooltipProps } from "../../../typings/tooltip";

interface Props extends TooltipProps {
  children: string | JSX.Element | JSX.Element[];
}

const Tooltip: FC<Props> = ({
  children,
  width = "150px",
  height = "25px",
  ...props
}) => {
  return (
    <Container width={width} height={height} {...props}>
      {children}
    </Container>
  );
};

export default Tooltip;
