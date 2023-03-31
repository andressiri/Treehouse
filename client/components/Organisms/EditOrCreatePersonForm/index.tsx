import { FC, useContext, useEffect, useRef, useState } from "react";
import { StudentsContext, TeachersContext } from "../../../contexts";
import Router from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import {
  useCreateStudent,
  useEditStudent,
  useCreateTeacher,
  useEditTeacher,
} from "../../../services";
import { StyledButton, StyledTextField } from "../../../components/Atoms";
import { Container, ErrorContainer, ErrorMessage } from "./styledComponents";

interface Props {
  rooms: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  person?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "student" | "teacher";
}

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description: string;
}

const EditOrCreatePersonForm: FC<Props> = ({ rooms, person, modelName }) => {
  const isStudent = useRef<boolean>(modelName === "student");
  const ContextOfStudents = useContext(StudentsContext);
  const { student } = useContext(StudentsContext);
  const ContextOfTeachers = useContext(TeachersContext);
  const { teacher } = useContext(TeachersContext);
  const { isSuccess, setIsSuccess, message, setMessage } = isStudent.current
    ? ContextOfStudents
    : ContextOfTeachers;

  const [formData, setFormData] = useState<IFormData>(
    !person
      ? {
          name: "",
          age: "",
          gender: "",
          description: "",
        }
      : {
          name: isStudent.current ? student.name : teacher.name,
          age: isStudent.current ? student.age : teacher.age,
          gender: isStudent.current ? student.gender : teacher.gender,
          description: isStudent.current
            ? student.description
            : teacher.description,
        }
  );
  const { createStudent } = useCreateStudent();
  const { editStudent } = useEditStudent();
  const { createTeacher } = useCreateTeacher();
  const { editTeacher } = useEditTeacher();

  useEffect(() => {
    if (person)
      setFormData({
        name: isStudent.current ? student.name : teacher.name,
        age: isStudent.current ? student.age : teacher.age,
        gender: isStudent.current ? student.gender : teacher.gender,
        description: isStudent.current
          ? student.description
          : teacher.description,
      });
  }, [student, teacher, person]);

  useEffect(() => {
    if (isSuccess) {
      setIsSuccess(false);
      setMessage("");
      Router.push(
        `/${modelName}s/${modelName}/${
          isStudent.current ? student.id : teacher.id
        }`
      );
    }

    return () => {
      setMessage("");
    };
  }, [student, teacher, isSuccess, setIsSuccess, setMessage, modelName]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (person && isStudent.current) {
      editStudent(formData, Number(Router.query.id));
      return;
    }

    if (isStudent.current) {
      createStudent(formData);
      return;
    }

    if (person) {
      editTeacher(formData, Number(Router.query.id));
      return;
    }

    createTeacher(formData);
  };

  return (
    <Container
      component="form"
      onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
    >
      <StyledTextField
        value={formData.name}
        name="name"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Name"
        variant="outlined"
        InputLabelProps={formData.name ? { shrink: true } : {}}
      />
      <StyledTextField
        value={formData.age}
        name="age"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Age"
        variant="outlined"
        InputLabelProps={formData.name ? { shrink: true } : {}}
      />
      <StyledTextField
        value={formData.gender}
        name="gender"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Gender"
        variant="outlined"
        InputLabelProps={formData.name ? { shrink: true } : {}}
      />
      <StyledTextField
        value={formData.description}
        name="description"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Description"
        variant="outlined"
        multiline={true}
        rows={4}
        InputLabelProps={formData.description ? { shrink: true } : {}}
      />
      <ErrorContainer>
        {message ? <ErrorMessage>{message}</ErrorMessage> : <></>}
      </ErrorContainer>
      <StyledButton type="submit" endIcon={<CheckIcon />}>
        {person ? `Edit ${modelName}` : `Create ${modelName}`}
      </StyledButton>
    </Container>
  );
};

export default EditOrCreatePersonForm;
