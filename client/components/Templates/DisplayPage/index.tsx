import { FC } from "react";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { SectionTitle, StyledButton } from "../../../components/Atoms";
import { CardsDisplay } from "../../../components/Organisms";
import { Container, StyledLink } from "./styledComponents";

interface Props {
  data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "room" | "student" | "teacher";
}

const DisplayPage: FC<Props> = ({ data, modelName }) => {
  return (
    <Container component="section">
      <SectionTitle>{`This are all our ${modelName}s`}</SectionTitle>
      <CardsDisplay displayArray={data} modelName={modelName} />
      <StyledLink href={`/${modelName}s/create`}>
        <StyledButton
          endIcon={
            modelName === "room" ? <MeetingRoomIcon /> : <PersonAddAlt1Icon />
          }
          tabIndex={-1}
        >
          {`Create ${modelName}`}
        </StyledButton>
      </StyledLink>
    </Container>
  );
};

export default DisplayPage;
