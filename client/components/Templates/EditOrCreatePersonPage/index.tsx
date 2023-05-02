import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { EditOrCreatePersonForm } from "../../Organisms";
import { Container } from "./styledComponents";
import { PersonEntities } from "../../../typings/global";
import { AnyStudent } from "../../../typings/students";
import { AnyTeacher } from "../../../typings/teachers";

interface Props {
  person?: AnyStudent | AnyTeacher;
  entityName: PersonEntities;
}

const EditOrCreatePersonPage: FC<Props> = ({ person, entityName }) => {
  return (
    <Container>
      <SectionTitle>
        {person
          ? `Edit ${person.name} ${entityName}`
          : `Create a brand new ${entityName}`}
      </SectionTitle>
      <EditOrCreatePersonForm person={person} entityName={entityName} />
    </Container>
  );
};

export default EditOrCreatePersonPage;
