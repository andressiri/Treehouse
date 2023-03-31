import { FC } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { LinkIconButton } from "../../../components/Atoms";
import {
  Container,
  FadeShadow,
  DescriptionContainer,
  Description,
  ButtonContainer,
} from "./styledComponents";

interface Props {
  description: string;
  roomId: number;
}

const RoomCardDescription: FC<Props> = ({ description, roomId }) => {
  return (
    <Container>
      <FadeShadow />
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <ButtonContainer>
        <LinkIconButton
          href={`/rooms/room/${roomId}`}
          icon={<VisibilityIcon />}
          tooltipText="See more..."
          tooltipWidth="75px"
        />
      </ButtonContainer>
    </Container>
  );
};

export default RoomCardDescription;
