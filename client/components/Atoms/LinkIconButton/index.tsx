import { FC, useState } from "react";
import { Tooltip } from "../../../components/Atoms";
import { StyledLink, StyledIconButton } from "./styledComponents";

interface Props {
  href: string;
  icon: JSX.Element;
  tooltipText: string;
  tooltipWidth: string;
}

const LinkIconButton: FC<Props> = ({
  href,
  icon,
  tooltipText,
  tooltipWidth,
}) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <StyledLink
      href={href}
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
      <StyledIconButton>{icon}</StyledIconButton>
    </StyledLink>
  );
};

export default LinkIconButton;
