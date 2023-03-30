import { FC, useState } from "react";
import { Tooltip } from "../../../components/Atoms";
import { Container, StyledIconButton } from "./styledComponents";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: JSX.Element;
  tooltipText: string;
  tooltipWidth: string;
}

const ActionIconButton: FC<Props> = ({
  onClick,
  icon,
  tooltipText,
  tooltipWidth,
}) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      {tooltip ? (
        <Tooltip width={tooltipWidth} top="-40px">
          {tooltipText}
        </Tooltip>
      ) : (
        <></>
      )}
      <StyledIconButton onClick={onClick}>{icon}</StyledIconButton>
    </Container>
  );
};

export default ActionIconButton;
