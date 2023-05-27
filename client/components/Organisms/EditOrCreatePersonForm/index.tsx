import { FC, useContext, useRef, useState } from "react";
import { StudentsContext, TeachersContext } from "../../../contexts";
import { useRouter } from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { MenuItem } from "@mui/material";
import {
  useCreateStudent,
  useEditStudent,
  useCreateTeacher,
  useEditTeacher,
  useEditRoom,
  useRemoveStudentFromRoom,
  useRemoveTeacherFromRoom,
} from "../../../services";
import { arrayBufferToBase64 } from "../../../utils/helpers";
import { StyledButton, StyledTextField } from "../../../components/Atoms";
import { DisplayPersonImage, RoomSelect } from "../../../components/Molecules";
import {
  Container,
  ImageContainer,
  StyledFileInput,
  StyledIconButton,
  ErrorContainer,
  ErrorMessage,
} from "./styledComponents";
import getArrays from "./getArrays";
import { PersonEntities } from "../../../typings/global";
import { ITeacher, ITeacherWithRelations } from "../../../typings/teachers";
import { IStudent } from "../../../typings/students";
import {
  STUDENTS_ROUTE,
  STUDENTS_SINGULAR,
  TEACHERS_ROUTE,
  TEACHERS_SINGULAR,
  STUDENT_ENTITY,
} from "../../../config/constants";
import { IRoom } from "../../../typings/rooms";

interface Props {
  person?: IStudent | ITeacherWithRelations;
  entityName: PersonEntities;
}

interface IFormData {
  name: string;
  age: string;
  gender: string;
  description: string;
  roomId: string;
}

const EditOrCreatePersonForm: FC<Props> = ({ person, entityName }) => {
  const [formData, setFormData] = useState<IFormData>({
    name: person?.name || "",
    age: person?.age ? `${person.age}` : "",
    gender: person?.gender || "",
    description: person?.description || "",
    roomId: (person as IStudent)?.roomId
      ? `${(person as IStudent)?.roomId}`
      : ((person as ITeacherWithRelations)?.Room as IRoom)?.id
      ? `${((person as ITeacherWithRelations)?.Room as IRoom)?.id}`
      : "",
  });
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    person?.picture
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const isStudent = entityName === STUDENT_ENTITY;
  const submitted = useRef<boolean>(false);
  const studentRemoved = useRef<boolean>(false);
  const inputFile = useRef<HTMLInputElement>(null);
  const { student } = useContext(StudentsContext);
  const { teacher, teacherWithRelations } = useContext(TeachersContext);
  const { genderArray } = getArrays();
  const { push, query } = useRouter();

  const errorAction = (message: string) => {
    submitted.current = false;
    studentRemoved.current = false;
    setErrorMessage(message);
  };

  const removeStudentSuccessAction = () => {
    submitted.current = false;
    setErrorMessage("");
    push(
      `/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${(student as IStudent)?.id}`
    );
  };

  const teacherRoomSuccessAction = () => {
    submitted.current = false;
    setErrorMessage("");
    push(
      `/${TEACHERS_ROUTE}/${TEACHERS_SINGULAR}/${(teacher as ITeacher)?.id}`
    );
  };

  const teacherRemoveFromRoomSuccessAction = () => {
    if (
      formData.roomId &&
      ((person as ITeacherWithRelations)?.Room as IRoom)?.id !==
        Number(formData.roomId)
    ) {
      editRoom(
        { teacherId: `${(teacher as ITeacher)?.id}` },
        Number(formData.roomId)
      );
    } else {
      teacherRoomSuccessAction();
    }
  };

  const { removeStudentFromRoom, message: removeStudentMessage } =
    useRemoveStudentFromRoom({
      successCondition: submitted.current,
      errorAction: () => errorAction(removeStudentMessage),
      successAction: removeStudentSuccessAction,
      successToast: true,
      successMessage: `${(student as IStudent)?.name} ${
        person ? "updated" : "created"
      } successfully`,
    });

  const { editRoom, message: editRoomMessage } = useEditRoom({
    successCondition: submitted.current,
    errorAction: () => errorAction(editRoomMessage),
    successAction: teacherRoomSuccessAction,
    successToast: true,
    successMessage: `${(teacherWithRelations as ITeacherWithRelations).name} ${
      person ? "updated" : "created"
    } successfully`,
  });

  const { removeTeacherFromRoom, message: removeTeacherMessage } =
    useRemoveTeacherFromRoom({
      successCondition: submitted.current,
      successAction: teacherRemoveFromRoomSuccessAction,
      errorAction: () => errorAction(removeTeacherMessage),
      successToast: !(
        ((person as ITeacherWithRelations)?.Room as IRoom)?.id !==
        Number(formData.roomId)
      ),
      successMessage: `${
        (teacherWithRelations as ITeacherWithRelations).name
      } ${person ? "updated" : "created"} successfully`,
    });

  const teachersSuccessAction = () => {
    if (!formData.roomId) {
      if (!person || !((person as ITeacherWithRelations)?.Room as IRoom)?.id) {
        push(
          `/${TEACHERS_ROUTE}/${TEACHERS_SINGULAR}/${(teacher as ITeacher)?.id}`
        );
      } else {
        removeTeacherFromRoom(
          ((person as ITeacherWithRelations)?.Room as IRoom)?.id
        );
      }
    } else {
      if (
        ((person as ITeacherWithRelations)?.Room as IRoom)?.id &&
        ((person as ITeacherWithRelations)?.Room as IRoom)?.id !==
          Number(formData.roomId)
      ) {
        removeTeacherFromRoom(
          ((person as ITeacherWithRelations)?.Room as IRoom)?.id
        );
      } else {
        editRoom(
          { teacherId: `${(teacher as ITeacher)?.id}` },
          Number(formData.roomId)
        );
      }
    }
  };

  const studentsSuccessAction = () => {
    if (
      formData.roomId ||
      (!formData.roomId && (!person || !(person as IStudent).roomId)) ||
      studentRemoved.current
    ) {
      push(
        `/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${(student as IStudent)?.id}`
      );
    } else {
      studentRemoved.current = true;
      removeStudentFromRoom((student as IStudent)?.id);
    }
  };

  const { createStudent, message: createStudentMessage } = useCreateStudent({
    successCondition: submitted.current,
    successAction: studentsSuccessAction,
    errorAction: () => errorAction(createStudentMessage),
    successToast: true,
  });

  const { editStudent, message: editStudentMessage } = useEditStudent({
    successCondition: submitted.current,
    errorAction: () => errorAction(editStudentMessage),
    successAction: studentsSuccessAction,
    successToast: Boolean(
      formData.roomId ||
        (!formData.roomId && (!person || !(person as IStudent).roomId))
    ),
    successMessage: `${(student as IStudent)?.name} ${
      person ? "updated" : "created"
    } successfully`,
  });

  const { createTeacher, message: createTeacherMessage } = useCreateTeacher({
    successCondition: submitted.current,
    errorAction: () => errorAction(createTeacherMessage),
    successAction: teachersSuccessAction,
    successToast: Boolean(!formData.roomId),
  });

  const { editTeacher, message: editTeacherMessage } = useEditTeacher({
    successCondition: submitted.current,
    errorAction: () => errorAction(editTeacherMessage),
    successAction: teachersSuccessAction,
    successToast: Boolean(!formData.roomId),
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

    if (person && isStudent) {
      editStudent(formData, Number(query.id));
      return;
    }

    if (isStudent) {
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
      editTeacher(teacherData, Number(query.id));
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
        if (fileReader.result === null) return;

        let result: string | ArrayBuffer = fileReader.result;

        if (typeof fileReader.result !== "string") {
          result = arrayBufferToBase64(result as ArrayBuffer);
        }

        sessionStorage.setItem("pictureForRequest", result as string);
        setImagePreview(result as string);
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
        <DisplayPersonImage imageSrc={imagePreview} />
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
        label="Name *"
        variant="outlined"
        InputLabelProps={formData.name ? { shrink: true } : {}}
      />
      <StyledTextField
        value={formData.age}
        name="age"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Age *"
        variant="outlined"
        InputLabelProps={formData.age ? { shrink: true } : {}}
      />
      <StyledTextField
        select={true}
        value={formData.gender}
        name="gender"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleOnChange(e)}
        label="Gender *"
        variant="outlined"
        InputLabelProps={formData.gender ? { shrink: true } : {}}
      >
        {genderArray.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledTextField>
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
        teacherId={
          isStudent ? undefined : (person as ITeacherWithRelations)?.id
        }
        showTeacherless={!isStudent}
      />
      <ErrorContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorContainer>
      <StyledButton
        type="submit"
        endIcon={<CheckIcon />}
        sx={{ marginBottom: "90px" }}
      >
        {person ? `Edit ${entityName}` : `Create ${entityName}`}
      </StyledButton>
    </Container>
  );
};

export default EditOrCreatePersonForm;
