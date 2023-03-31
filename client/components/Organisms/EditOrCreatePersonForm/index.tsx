import { FC, useContext, useEffect, useRef, useState } from "react";
import { StudentsContext, RoomsContext } from "../../../contexts";
import Router from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import {
  useCreateStudent,
  useEditStudent,
  useCreateRoom,
  useEditRoom,
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
  const ContextOfTeachers = useContext(RoomsContext);
  const { room } = useContext(RoomsContext);
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
          name: isStudent.current ? student.name : room.name,
          age: isStudent.current ? student.age : room.age,
          gender: isStudent.current ? student.gender : room.gender,
          description: isStudent.current
            ? student.description
            : room.description,
        }
  );
  const { createStudent } = useCreateStudent();
  const { editStudent } = useEditStudent();
  const { createRoom } = useCreateRoom();
  const { editRoom } = useEditRoom();

  useEffect(() => {
    if (person)
      setFormData({
        name: isStudent.current ? student.name : room.name,
        age: isStudent.current ? student.age : room.age,
        gender: isStudent.current ? student.gender : room.gender,
        description: isStudent.current ? student.description : room.description,
      });
  }, [student, room, person]);

  useEffect(() => {
    if (isSuccess) {
      setIsSuccess(false);
      setMessage("");
      Router.push(
        `/${modelName}s/${modelName}/${
          isStudent.current ? student.id : room.id
        }`
      );
    }

    return () => {
      setMessage("");
    };
  }, [student, room, isSuccess, setIsSuccess, setMessage, modelName]);

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
      editRoom(formData, Number(Router.query.id));
      return;
    }

    createRoom(formData);
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
