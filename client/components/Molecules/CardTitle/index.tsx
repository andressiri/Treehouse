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
import { Entities } from "../../../typings/global";

interface Props {
  title: string;
  id: number;
  entityName: Entities;
}

const CardTitle: FC<Props> = ({ title, id, entityName }) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <Container>
      <Title>{title}</Title>
      <ButtonContainer>
        <StyledLink
          href={`/${entityName}s/${entityName}/${id}`}
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
              {`Go to ${entityName}`}
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
