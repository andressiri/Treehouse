import { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Tooltip } from "../../../components/Atoms";
import {
  Container,
  FadeShadow,
  Description,
  ButtonContainer,
  StyledLink,
  StyledIconButton,
} from "./styledComponents";

interface Props {
  description: string;
}

const RoomCardDescription: FC<Props> = ({ description }) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <Container>
      <FadeShadow />
      <Description>{description}</Description>
      <ButtonContainer>
        <StyledLink
          href="/rooms"
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
        >
          {tooltip ? (
            <Tooltip width="75px" top="-40px">
              See more...
            </Tooltip>
          ) : (
            <></>
          )}
          <StyledIconButton>
            <VisibilityIcon />
          </StyledIconButton>
        </StyledLink>
      </ButtonContainer>
    </Container>
  );
};

export default RoomCardDescription;
