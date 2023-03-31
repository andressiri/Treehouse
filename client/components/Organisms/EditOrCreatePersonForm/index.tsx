import { FC, useContext, useEffect, useRef, useState } from "react";
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
} from "../../../services";
import {
  StyledButton,
  StyledSelect,
  StyledTextField,
} from "../../../components/Atoms";
import { DisplayImage } from "../../../components/Molecules";
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
  rooms: any; // eslint-disable-line @typescript-eslint/no-explicit-any
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

const EditOrCreatePersonForm: FC<Props> = ({ rooms, person, modelName }) => {
  const inputFile = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState(person?.picture);
  const { genderArray, roomsArray } = getArrays(rooms, modelName);
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
          roomId: "",
        }
      : {
          name: isStudent.current ? student.name : teacher.name,
          age: isStudent.current ? student.age : teacher.age,
          gender: isStudent.current ? student.gender : teacher.gender,
          description: isStudent.current
            ? student.description
            : teacher.description,
          roomId: isStudent.current ? student.roomId : teacher.roomId,
        }
  );
  const { createStudent } = useCreateStudent();
  const { editStudent } = useEditStudent();
  const { createTeacher } = useCreateTeacher();
  const { editTeacher } = useEditTeacher();
  const { editRoom } = useEditRoom();

  useEffect(() => {
    if (person)
      setFormData({
        name: isStudent.current ? student.name : teacher.name,
        age: isStudent.current ? student.age : teacher.age,
        gender: isStudent.current ? student.gender : teacher.gender,
        description: isStudent.current
          ? student.description
          : teacher.description,
        roomId: isStudent.current ? student.roomId : teacher.Room.id,
      });
    setImagePreview(isStudent.current ? student.picture : teacher.picture);
  }, [student, teacher, person]);

  useEffect(() => {
    if (isSuccess) {
      setIsSuccess(false);
      setMessage("");
      if (modelName === "teacher")
        editRoom({ teacherId: teacher.id }, Number(formData.roomId));
      Router.push(
        `/${modelName}s/${modelName}/${
          isStudent.current ? student.id : teacher.id
        }`
      );
    }

    return () => {
      setMessage("");
    };
  }, [
    student,
    teacher,
    isSuccess,
    setIsSuccess,
    setMessage,
    modelName,
    editRoom,
    formData,
  ]);

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
      <StyledSelect
        disabled={!roomsArray.length}
        select={true}
        value={formData.roomId}
        name="roomId"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label={!roomsArray.length ? "No rooms available" : "Room"}
        variant="outlined"
        InputLabelProps={formData.roomId ? { shrink: true } : {}}
      >
        {roomsArray.map(
          (
            option: any, // eslint-disable-line @typescript-eslint/no-explicit-any
            id: number
          ) => (
            <MenuItem key={`${option.name}${id}`} value={option.id}>
              {option.name}
            </MenuItem>
          )
        )}
        <MenuItem value={""}>No room</MenuItem>
      </StyledSelect>
      <ErrorContainer>
        {message ? <ErrorMessage>{message}</ErrorMessage> : <></>}
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
