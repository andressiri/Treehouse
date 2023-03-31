import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { EditOrCreatePersonForm } from "../../Organisms";
import { Container } from "./styledComponents";

interface Props {
  rooms: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  person?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "student" | "teacher";
}

const EditOrCreatePersonPage: FC<Props> = ({ rooms, person, modelName }) => {
  return (
    <Container>
      <SectionTitle>
        {person
          ? `Edit ${person.name} ${modelName}`
          : `Create a brand new ${modelName}`}
      </SectionTitle>
      <EditOrCreatePersonForm
        rooms={rooms}
        person={person}
        modelName={modelName}
      />
    </Container>
  );
};

export default EditOrCreatePersonPage;
