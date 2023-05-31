import { IUser } from "./users";
import { IRoom, IRoomWithRelations } from "./rooms";
import { IStudent, IStudentWithRelations } from "./students";
import { ITeacher, ITeacherWithRelations } from "./teachers";

export interface IContextProviderProps {
  children: React.ReactNode;
}

export interface IGeneralContext {
  viewportWidth: number;
  viewportHeight: number;
}

// Users
export type Users = IUser[] | [];
export type SetUsers = React.Dispatch<React.SetStateAction<IUser[] | []>>;

export type User = IUser | object;
export type SetUser = React.Dispatch<React.SetStateAction<IUser | object>>;

export interface IUsersContext {
  users: Users;
  setUsers: SetUsers;
  user: User;
  setUser: SetUser;
}

// Rooms
export type Rooms = IRoom[] | IRoomWithRelations[] | [];
export type SetRooms = React.Dispatch<React.SetStateAction<IRoom[] | []>>;

export type RoomsWithRelations = IRoomWithRelations[] | [];
export type SetRoomsWithRelations = React.Dispatch<
  React.SetStateAction<IRoomWithRelations[] | []>
>;

export type Room = IRoom | object;
export type SetRoom = React.Dispatch<React.SetStateAction<IRoom | object>>;

export type RoomWithRelations = IRoomWithRelations | object;
export type SetRoomWithRelations = React.Dispatch<
  React.SetStateAction<IRoomWithRelations | object>
>;
export interface IRoomsContext {
  rooms: Rooms;
  setRooms: SetRooms;
  roomsWithRelations: RoomsWithRelations;
  setRoomsWithRelations: SetRoomsWithRelations;
  room: Room;
  setRoom: SetRoom;
  roomWithRelations: RoomWithRelations;
  setRoomWithRelations: SetRoomWithRelations;
}

// Students
export type Students = IStudent[] | IStudentWithRelations[] | [];
export type SetStudents = React.Dispatch<React.SetStateAction<IStudent[] | []>>;

export type StudentsWithRelations = IStudentWithRelations[] | [];
export type SetStudentsWithRelations = React.Dispatch<
  React.SetStateAction<IStudentWithRelations[] | []>
>;

export type Student = IStudent | object;
export type SetStudent = React.Dispatch<
  React.SetStateAction<IStudent | object>
>;

export type StudentWithRelations = IStudentWithRelations | object;
export type SetStudentWithRelations = React.Dispatch<
  React.SetStateAction<IStudentWithRelations | object>
>;
export interface IStudentsContext {
  students: Students;
  setStudents: SetStudents;
  studentsWithRelations: StudentsWithRelations;
  setStudentsWithRelations: SetStudentsWithRelations;
  student: Student;
  setStudent: SetStudent;
  studentWithRelations: StudentWithRelations;
  setStudentWithRelations: SetStudentWithRelations;
}

// Teachers
export type Teachers = ITeacher[] | ITeacherWithRelations[] | [];
export type SetTeachers = React.Dispatch<React.SetStateAction<ITeacher[] | []>>;

export type TeachersWithRelations = ITeacherWithRelations[] | [];
export type SetTeachersWithRelations = React.Dispatch<
  React.SetStateAction<ITeacherWithRelations[] | []>
>;

export type Teacher = ITeacher | object;
export type SetTeacher = React.Dispatch<
  React.SetStateAction<ITeacher | object>
>;

export type TeacherWithRelations = ITeacherWithRelations | object;
export type SetTeacherWithRelations = React.Dispatch<
  React.SetStateAction<ITeacherWithRelations | object>
>;
export interface ITeachersContext {
  teachers: Teachers;
  setTeachers: SetTeachers;
  teachersWithRelations: TeachersWithRelations;
  setTeachersWithRelations: SetTeachersWithRelations;
  teacher: Teacher;
  setTeacher: SetTeacher;
  teacherWithRelations: TeacherWithRelations;
  setTeacherWithRelations: SetTeacherWithRelations;
}

// Entities
export type EntitiesState =
  | Rooms
  | RoomsWithRelations
  | Room
  | RoomWithRelations
  | Students
  | StudentsWithRelations
  | Student
  | StudentWithRelations
  | Teachers
  | TeachersWithRelations
  | Teacher
  | TeacherWithRelations;

export type SetServiceState =
  | SetRooms
  | SetRoomsWithRelations
  | SetRoom
  | SetRoomWithRelations
  | SetStudents
  | SetStudentsWithRelations
  | SetStudent
  | SetStudentWithRelations
  | SetTeachers
  | SetTeachersWithRelations
  | SetTeacher
  | SetTeacherWithRelations;
