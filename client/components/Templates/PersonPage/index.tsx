import { FC, useState } from "react";
import Router from "next/router";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import EditIcon from "@mui/icons-material/Edit";
import { useDeleteStudent, useDeleteTeacher } from "../../../services";
import {
  FallbackText,
  SectionTitle,
  StyledButton,
} from "../../../components/Atoms";
import {
  DisplayImage,
  PersonBasicInfo,
  PersonRoom,
  PersonRoomFallback,
} from "../../../components/Molecules";
import { ConfirmModal, StudentSiblings } from "../../../components/Organisms";
import {
  Container,
  InnerContainer,
  Description,
  ActionsContainer,
} from "./styledComponents";
import { PersonEntities } from "../../../typings/global";
import { IRoom } from "../../../typings/rooms";
import { IStudentWithRelations } from "../../../typings/students";
import { ITeacherWithRelations } from "../../../typings/teachers";
import { STUDENT_ENTITY } from "../../../config/constants";

interface Props {
  person: IStudentWithRelations | ITeacherWithRelations;
  entityName: PersonEntities;
}

const PersonPage: FC<Props> = ({ person, entityName }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const isStudent = entityName === STUDENT_ENTITY;
  const { deleteStudent } = useDeleteStudent();
  const { deleteTeacher } = useDeleteTeacher();

  return (
    <Container component="section">
      <InnerContainer>
        <SectionTitle>{person.name}</SectionTitle>
        <DisplayImage imageSrc={person.picture} />
        <PersonBasicInfo age={person.age} gender={person.gender} />
        {person.description ? (
          <Description>{person.description}</Description>
        ) : (
          <FallbackText>{`This ${entityName} has no description`}</FallbackText>
        )}
        {(person.Room as IRoom)?.id ? (
          <PersonRoom
            room={{
              id: (person.Room as IRoom).id,
              name: (person.Room as IRoom).name,
              description: (person.Room as IRoom).description,
            }}
            personId={person.id}
            personName={person.name}
            entityName={entityName}
          />
        ) : (
          <PersonRoomFallback
            personId={person.id}
            personName={person.name}
            entityName={entityName}
          />
        )}
        {isStudent ? (
          <StudentSiblings person={person as IStudentWithRelations} />
        ) : (
          <></>
        )}

        <ActionsContainer>
          <StyledButton
            BGType="secondaryContrastOutlined"
            endIcon={<WarningAmberIcon />}
            onClick={() => setOpenConfirm(true)}
          >
            {`Delete ${entityName}`}
          </StyledButton>
          <StyledButton
            endIcon={<EditIcon />}
            onClick={() => Router.push(`/${entityName}s/edit/${person.id}`)}
          >
            {`Edit ${entityName}`}
          </StyledButton>
        </ActionsContainer>
        <ConfirmModal
          text={`Are you sure you want to delete ${person.name}?`}
          confirmAction={() => {
            if (isStudent) {
              deleteStudent(Number(Router.query.id));
              return;
            }

            deleteTeacher(Number(Router.query.id));
          }}
          successText={`${person.name} was deleted successfully`}
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          onSuccess={() => Router.push("/")}
          confirmContext={isStudent ? "StudentsContext" : "TeachersContext"}
        />
      </InnerContainer>
    </Container>
  );
};

export default PersonPage;
