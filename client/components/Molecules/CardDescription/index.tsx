import { FC } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { LinkIconButton } from "../../Atoms";
import {
  Container,
  FadeShadow,
  DescriptionContainer,
  Description,
  ButtonContainer,
} from "./styledComponents";

interface Props {
  description: string;
  id: number;
  modelName: "room" | "student" | "teacher";
}

const RoomCardDescription: FC<Props> = ({ description, id, modelName }) => {
  return (
    <Container>
      <FadeShadow />
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <ButtonContainer>
        <LinkIconButton
          href={`/${modelName}s/${modelName}/${id}`}
          icon={<VisibilityIcon />}
          tooltipText="See more..."
          tooltipWidth="75px"
        />
      </ButtonContainer>
    </Container>
  );
};

export default RoomCardDescription;
