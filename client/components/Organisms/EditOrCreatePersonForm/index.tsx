import { FC, useContext, useRef, useState } from "react";
import { StudentsContext, TeachersContext } from "../../../contexts";
import Router from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { MenuItem } from "@mui/material";
import {
  useCreateStudent,
  useEditStudent,
  useCreateTeacher,
  useEditTeacher,
  useEditRoom,
  useHandleStudentsResponseEffect,
  useHandleTeachersResponseEffect,
  useHandleRoomsResponseEffect,
  useRemoveStudentFromRoom,
} from "../../../services";
import {
  StyledButton,
  StyledSelect,
  StyledTextField,
} from "../../../components/Atoms";
import { DisplayImage, RoomSelect } from "../../../components/Molecules";
import {
  Container,
  ImageContainer,
  StyledFileInput,
  StyledIconButton,
  ErrorContainer,
  ErrorMessage,
} from "./styledComponents";
import getArrays from "./getArrays";

interface Props {
  person?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "student" | "teacher";
}

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description: string;
  roomId: string;
}

const EditOrCreatePersonForm: FC<Props> = ({ person, modelName }) => {
  const [formData, setFormData] = useState<IFormData>({
    name: person?.name || "",
    age: person?.age || "",
    gender: person?.gender || "",
    description: person?.description || "",
    roomId: person?.roomId || "",
  });
  const [imagePreview, setImagePreview] = useState(person?.picture);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const isStudent = useRef<boolean>(modelName === "student");
  const submitted = useRef<boolean>(false);
  const studentRemoved = useRef<boolean>(false);
  const inputFile = useRef<HTMLInputElement>(null);
  const { student } = useContext(StudentsContext);
  const { teacher } = useContext(TeachersContext);
  const ContextOfStudents = useContext(StudentsContext);
  const ContextOfTeachers = useContext(TeachersContext);
  const { message } = isStudent.current ? ContextOfStudents : ContextOfTeachers;
  const { genderArray } = getArrays();
  const { createStudent } = useCreateStudent();
  const { editStudent } = useEditStudent();
  const { removeStudentFromRoom } = useRemoveStudentFromRoom();
  const { createTeacher } = useCreateTeacher();
  const { editTeacher } = useEditTeacher();
  const { editRoom } = useEditRoom();

  const errorAction = () => {
    submitted.current = false;
    studentRemoved.current = false;
    setErrorMessage(message);
  };

  const studentsSuccessAction = () => {
    if (
      formData.roomId ||
      (!formData.roomId && (!person || !person.roomId)) ||
      studentRemoved.current
    ) {
      Router.push(`/students/student/${student.id}`);
    } else {
      studentRemoved.current = true;
      removeStudentFromRoom(Number(student.id));
    }
  };

  const teachersSuccessAction = () => {
    if (!formData.roomId) {
      Router.push(`/teachers/teacher/${teacher.id}`);
    } else {
      editRoom({ teacherId: teacher.id }, Number(formData.roomId));
    }
  };

  const roomSuccessAction = () => {
    submitted.current = false;
    setErrorMessage("");
    Router.push(`/teachers/teacher/${teacher.id}`);
  };

  useHandleStudentsResponseEffect({
    successCondition: submitted.current,
    errorAction,
    successAction: studentsSuccessAction,
    successToast: Boolean(
      formData.roomId ||
        (!formData.roomId && (!person || !person.roomId)) ||
        studentRemoved.current
    ),
    successMessage: `${student.name} ${
      person ? "updated" : "created"
    } successfully`,
  });

  useHandleTeachersResponseEffect({
    successCondition: submitted.current,
    errorAction,
    successAction: teachersSuccessAction,
    successToast: Boolean(!formData.roomId),
  });

  useHandleRoomsResponseEffect({
    successCondition: submitted.current,
    errorAction,
    successAction: roomSuccessAction,
    errorToast: true,
    successToast: true,
    successMessage: `${teacher.name} ${
      person ? "updated" : "created"
    } successfully`,
  });

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

    submitted.current = true;
    setErrorMessage("");

    if (person && isStudent.current) {
      editStudent(formData, Number(Router.query.id));
      return;
    }

    if (isStudent.current) {
      createStudent(formData);
      return;
    }

    const teacherData = {
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      description: formData.description,
    };

    if (person) {
      editTeacher(teacherData, Number(Router.query.id));
      return;
    }

    createTeacher(teacherData);
  };

  const handleUploadImage = () =>
    (inputFile as React.RefObject<HTMLInputElement>).current?.click();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        sessionStorage.setItem("file", fileReader.result as string);
        setImagePreview(fileReader.result);
      }
    };
    if (!e.target.files) return;

    fileReader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Container
      component="form"
      onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
    >
      <ImageContainer onClick={handleUploadImage}>
        <StyledFileInput
          accept="image/*"
          ref={inputFile}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFileUpload(e)
          }
          type="file"
        />
        <DisplayImage imageSrc={imagePreview} />
        <StyledIconButton>
          <CloudUploadIcon />
        </StyledIconButton>
      </ImageContainer>
      <StyledTextField
        value={formData.name}
        name="name"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Name*"
        variant="outlined"
        InputLabelProps={formData.name ? { shrink: true } : {}}
      />
      <StyledTextField
        value={formData.age}
        name="age"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Age*"
        variant="outlined"
        InputLabelProps={formData.age ? { shrink: true } : {}}
      />
      <StyledSelect
        select={true}
        value={formData.gender}
        name="gender"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Gender*"
        variant="outlined"
        InputLabelProps={formData.gender ? { shrink: true } : {}}
      >
        {genderArray.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
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
      <RoomSelect
        value={formData.roomId}
        name="roomId"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        showJustTeacherless={modelName === "teacher"}
      />
      <ErrorContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorContainer>
      <StyledButton
        type="submit"
        endIcon={<CheckIcon />}
        sx={{ marginBottom: "90px" }}
      >
        {person ? `Edit ${modelName}` : `Create ${modelName}`}
      </StyledButton>
    </Container>
  );
};

export default EditOrCreatePersonForm;
