import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { EditOrCreatePersonForm } from "../../Organisms";
import { Container } from "./styledComponents";

interface Props {
  person?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "student" | "teacher";
}

const EditOrCreatePersonPage: FC<Props> = ({ person, modelName }) => {
  return (
    <Container>
      <SectionTitle>
        {person
          ? `Edit ${person.name} ${modelName}`
          : `Create a brand new ${modelName}`}
      </SectionTitle>
      <EditOrCreatePersonForm person={person} modelName={modelName} />
    </Container>
  );
};

export default EditOrCreatePersonPage;
