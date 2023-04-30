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
import { Entities } from "../../../typings/global";

interface Props {
  id: number;
  description?: string;
  entityName: Entities;
}

const RoomCardDescription: FC<Props> = ({ id, description, entityName }) => {
  return (
    <Container>
      <FadeShadow />
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <ButtonContainer>
        <LinkIconButton
          href={`/${entityName}s/${entityName}/${id}`}
          icon={<VisibilityIcon />}
          tooltipText="See more..."
          tooltipWidth="75px"
        />
      </ButtonContainer>
    </Container>
  );
};

export default RoomCardDescription;
