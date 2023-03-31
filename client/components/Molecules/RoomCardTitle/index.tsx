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
  roomId: number;
}

const RoomCardTitle: FC<Props> = ({ title, roomId }) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <Container>
      <Title>{title}</Title>
      <ButtonContainer>
        <StyledLink
          href={`/rooms/room/${roomId}`}
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
              Go to room
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
