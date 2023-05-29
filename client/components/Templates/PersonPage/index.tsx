import { FC, useState } from "react";
import { useRouter } from "next/router";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import EditIcon from "@mui/icons-material/Edit";
import { useDeleteStudent, useDeleteTeacher } from "../../../services";
import {
  FallbackText,
  SectionTitle,
  StyledButton,
} from "../../../components/Atoms";
import {
  DisplayPersonImage,
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
import {
  STUDENTS_ROUTE,
  STUDENT_ENTITY,
  TEACHERS_ROUTE,
} from "../../../config/constants";

interface Props {
  person: IStudentWithRelations | ITeacherWithRelations;
  entityName: PersonEntities;
}

const PersonPage: FC<Props> = ({ person, entityName }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const isStudent = entityName === STUDENT_ENTITY;
  const { push, query } = useRouter();

  const { deleteStudent, isLoading: studentLoading } = useDeleteStudent({
    successAction: () => push(`/${STUDENTS_ROUTE}`),
    errorToast: true,
    successToast: true,
  });
  const { deleteTeacher, isLoading: teacherLoading } = useDeleteTeacher({
    successAction: () => push(`/${TEACHERS_ROUTE}`),
    errorToast: true,
    successToast: true,
  });

  return (
    <Container component="section">
      <InnerContainer>
        <SectionTitle>{person.name}</SectionTitle>
        <DisplayPersonImage imageSrc={person.picture} />
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
            onClick={() => push(`/${entityName}s/edit/${person.id}`)}
          >
            {`Edit ${entityName}`}
          </StyledButton>
        </ActionsContainer>
        <ConfirmModal
          text={`Are you sure you want to delete ${person.name}?`}
          confirmAction={() => {
            if (isStudent) {
              deleteStudent(Number(query.id));
              return;
            }

            deleteTeacher(Number(query.id));
          }}
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          isLoading={isStudent ? studentLoading : teacherLoading}
        />
      </InnerContainer>
    </Container>
  );
};

export default PersonPage;
