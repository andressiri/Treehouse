import { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Tooltip } from "../../../components/Atoms";
import {
  Container,
  Title,
  ButtonContainer,
  StyledLink,
  StyledIconButton,
} from "./styledComponents";

interface Props {
  title: string;
}

const RoomCardTitle: FC<Props> = ({ title }) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <Container>
      <Title>{title}</Title>
      <ButtonContainer>
        <StyledLink
          href="/rooms"
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
        >
          {tooltip ? (
            <Tooltip
              tooltipPosition="left"
              color="primaryContrast"
              width="75px"
              left="-70px"
            >
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

export default RoomCardTitle;
