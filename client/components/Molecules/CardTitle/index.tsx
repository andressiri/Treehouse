import { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Tooltip } from "../../Atoms";
import {
  Container,
  Title,
  ButtonContainer,
  StyledLink,
  StyledIconButton,
} from "./styledComponents";

interface Props {
  title: string;
  id: number;
  modelName: "room" | "student" | "teacher";
}

const CardTitle: FC<Props> = ({ title, id, modelName }) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <Container>
      <Title>{title}</Title>
      <ButtonContainer>
        <StyledLink
          href={`/${modelName}s/${modelName}/${id}`}
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
        >
          {tooltip ? (
            <Tooltip
              tooltipPosition="left"
              color="primaryContrast"
              width="90px"
              left="-70px"
            >
              {`Go to ${modelName}`}
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

export default CardTitle;
