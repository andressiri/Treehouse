import { FC, useState } from "react";
import Router from "next/router";
import { MenuItem } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useAddSibling } from "../../../services";
import { FallbackText, StyledButton, StyledSelect } from "../../Atoms";
import { ConfirmModal, StudentsList } from "..";
import { Container, FormContainer, Title } from "./styledComponents";

interface Props {
  students: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const StudentSiblings: FC<Props> = ({ students, data }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [studentSelected, setStudentSelected] = useState<string>("");
  const { addSibling } = useAddSibling();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const siblingsIds = data.hasSibling?.map((sibling: any) => {
    return sibling?.id;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const studentsArray = students.filter((student: any) => {
    if (student.id === data.id || siblingsIds?.includes(student.id))
      return null;
    return true;
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setStudentSelected(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!siblingsIds.length) {
      addSibling({ siblingId: studentSelected }, data.id);
      setStudentSelected("");
      return;
    }

    setOpenConfirm(true);
  };

  return (
    <Container>
      <Title>Sibling of</Title>
      {data.hasSibling && data.hasSibling.length ? (
        <StudentsList
          studentsArray={data.hasSibling}
          listOf={"siblings"}
          studentId={data.id}
        />
      ) : (
        <FallbackText>There are no siblings registered</FallbackText>
      )}
      <FormContainer
        component="form"
        onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
      >
        <StyledSelect
          disabled={!studentsArray.length}
          select={true}
          value={studentSelected}
          name="studentSelected"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => handleOnChange(e)}
          label={
            !studentsArray.length ? "No siblings available" : "Add Sibling"
          }
          variant="outlined"
        >
          {studentsArray.map(
            (
              option: any, // eslint-disable-line @typescript-eslint/no-explicit-any
              id: number
            ) => (
              <MenuItem key={`${option.name}${id}`} value={option.id}>
                {option.name}
              </MenuItem>
            )
          )}
          <MenuItem value={""}>Cancel</MenuItem>
        </StyledSelect>
        <StyledButton
          disabled={!studentSelected}
          type="submit"
          endIcon={<PersonAddAlt1Icon />}
        >
          Add sibling
        </StyledButton>
      </FormContainer>
      <ConfirmModal
        text={`Do yo want to add it to the other siblings too?`}
        confirmAction={() => {
          addSibling(
            { siblingId: studentSelected, addToOtherSiblings: true },
            data.id
          );
          setStudentSelected("");
          setOpenConfirm(false);
        }}
        noAction={() => {
          addSibling({ siblingId: studentSelected }, data.id);
          setStudentSelected("");
          setOpenConfirm(false);
        }}
        successText={`Sibling added successfully`}
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onSuccess={() => Router.push("/")}
        confirmContext="StudentsContext"
      />
    </Container>
  );
};

export default StudentSiblings;
