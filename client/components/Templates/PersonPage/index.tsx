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
} from "../../../components/Molecules";
import { ConfirmModal, StudentsList } from "../../../components/Organisms";
import {
  Container,
  InnerContainer,
  Description,
  StudentsTitle,
  ActionsContainer,
} from "./styledComponents";

interface Props {
  data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "student" | "teacher";
}

const PersonPage: FC<Props> = ({ data, modelName }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const { deleteStudent } = useDeleteStudent();
  const { deleteTeacher } = useDeleteTeacher();

  return (
    <Container component="section">
      <InnerContainer>
        <SectionTitle>{data.name}</SectionTitle>
        <DisplayImage imageSrc={data.picture} />
        <PersonBasicInfo age={data.age} gender={data.gender} />
        {data.description ? (
          <Description>{data.description}</Description>
        ) : (
          <FallbackText>{`This ${modelName} has no description`}</FallbackText>
        )}
        {data.Room ? <PersonRoom room={data.Room} /> : <></>}
        {modelName === "student" ? (
          <>
            <StudentsTitle>Sibling of</StudentsTitle>
            {data.hasSibling && data.hasSibling.length ? (
              <StudentsList
                studentsArray={data.hasSibling}
                listOf={"siblings"}
              />
            ) : (
              <FallbackText>There are no siblings registered</FallbackText>
            )}
          </>
        ) : (
          <></>
        )}

        <ActionsContainer>
          <StyledButton
            BGType="secondaryContrastOutlined"
            endIcon={<WarningAmberIcon />}
            onClick={() => setOpenConfirm(true)}
          >
            {`Delete ${modelName}`}
          </StyledButton>
          <StyledButton
            endIcon={<EditIcon />}
            onClick={() => Router.push(`/${modelName}s/edit/${data.id}`)}
          >
            {`Edit ${modelName}`}
          </StyledButton>
        </ActionsContainer>
        <ConfirmModal
          text={`Are you sure you want to delete ${data.name}?`}
          confirmAction={() => {
            if (modelName === "student") {
              deleteStudent(Number(Router.query.id));
              return;
            }

            deleteTeacher(Number(Router.query.id));
          }}
          successText={`${data.name} was deleted successfully`}
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          onSuccess={() => Router.push("/")}
          confirmContext={
            modelName === "student" ? "StudentsContext" : "TeachersContext"
          }
        />
      </InnerContainer>
    </Container>
  );
};

export default PersonPage;
