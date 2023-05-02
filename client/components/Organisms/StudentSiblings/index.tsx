import { FC, useState } from "react";
import { useRouter } from "next/router";
import { MenuItem } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useAddSibling } from "../../../services";
import { FallbackText, StyledButton, StyledSelect } from "../../Atoms";
import { ConfirmModal, StudentsList } from "..";
import { Container, FormContainer, Title } from "./styledComponents";
import useGetStudentsArray from "./useGetStudentsArrays";
import { IStudentWithRelations } from "../../../typings/students";

interface Props {
  person: IStudentWithRelations;
}

const StudentSiblings: FC<Props> = ({ person }) => {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [studentSelected, setStudentSelected] = useState<string>("");
  const { siblingsIds, studentsArray, selectSiblingArray } =
    useGetStudentsArray(person);
  const { asPath, replace } = useRouter();

  const siblingResolveAction = () => {
    setOpenConfirm(false);
    replace(asPath, undefined, { scroll: false });
  };
  const { addSibling, isLoading } = useAddSibling({
    errorAction: siblingResolveAction,
    successAction: siblingResolveAction,
    errorToast: true,
    successToast: true,
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setStudentSelected(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!siblingsIds?.length) {
      addSibling({ siblingId: studentSelected }, person.id);
      setStudentSelected("");
      return;
    }

    setOpenConfirm(true);
  };

  return (
    <Container>
      <Title>Sibling of</Title>
      {person.hasSibling?.length ? (
        <StudentsList
          studentsArray={person.hasSibling}
          listOf={"siblings"}
          studentId={person.id}
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
          {selectSiblingArray.map((option, id) => (
            <MenuItem key={`${option.name}${id}`} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
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
            person.id
          );
          setStudentSelected("");
        }}
        noAction={() => {
          addSibling({ siblingId: studentSelected }, person.id);
          setStudentSelected("");
        }}
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default StudentSiblings;
