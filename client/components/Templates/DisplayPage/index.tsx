import { FC } from "react";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { SectionTitle, StyledButton } from "../../../components/Atoms";
import { CardsDisplay } from "../../../components/Organisms";
import { Container, StyledLink } from "./styledComponents";
import useFilterData from "./useFilterData";
import { Entities } from "../../../typings/global";
import { AnyRoomArray } from "../../../typings/rooms";
import { AnyStudentArray } from "../../../typings/students";
import { AnyTeacherArray } from "../../../typings/teachers";
import { ROOM_ENTITY } from "../../../config/constants";

interface Props {
  data: AnyRoomArray | AnyStudentArray | AnyTeacherArray;
  entityName: Entities;
}

const DisplayPage: FC<Props> = ({ data, entityName }) => {
  const { dataToPass } = useFilterData({ data });
  const isRoom = entityName === ROOM_ENTITY;

  return (
    <Container component="section">
      <SectionTitle>{`This are all our ${entityName}s`}</SectionTitle>
      <CardsDisplay displayArray={dataToPass} entityName={entityName} />
      <StyledLink href={`/${entityName}s/create`}>
        <StyledButton
          endIcon={isRoom ? <MeetingRoomIcon /> : <PersonAddAlt1Icon />}
          tabIndex={-1}
        >
          {`Create ${entityName}`}
        </StyledButton>
      </StyledLink>
    </Container>
  );
};

export default DisplayPage;
