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

export interface IServiceContext {
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

interface IServiceHandlers {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export type SetRooms = React.Dispatch<
  React.SetStateAction<IRoom[] | IRoomWithRelations[] | []>
>;
export type SetRoom = React.Dispatch<
  React.SetStateAction<IRoom | IRoomWithRelations | object>
>;
export interface IRoomsContext extends IServiceContext {
  rooms: IRoom[] | IRoomWithRelations[] | [];
  setRooms: SetRooms;
  room: IRoom | IRoomWithRelations | object;
  setRoom: SetRoom;
}

export type SetStudents = React.Dispatch<
  React.SetStateAction<IStudent[] | IStudentWithRelations[] | []>
>;
export type SetStudent = React.Dispatch<
  React.SetStateAction<IStudent | IStudentWithRelations | object>
>;
export interface IStudentsContext extends IServiceContext {
  students: IStudent[] | IStudentWithRelations[] | [];
  setStudents: SetStudents;
  student: IStudent | IStudentWithRelations | object;
  setStudent: SetStudent;
}

export type SetTeachers = React.Dispatch<
  React.SetStateAction<ITeacher[] | ITeacherWithRelations[] | []>
>;

export type SetTeacher = React.Dispatch<
  React.SetStateAction<ITeacher | ITeacherWithRelations | object>
>;
export interface ITeachersContext extends IServiceContext {
  teachers: ITeacher[] | ITeacherWithRelations[] | [];
  setTeachers: setTeacher;
  teacher: ITeacher | ITeacherWithRelations | object;
  setTeacher: SetTeacher;
}

export type SetServiceState =
  | SetRooms
  | SetRoom
  | SetStudents
  | SetStudent
  | SetTeachers
  | SetTeacher;

export type ServicesContexts =
  | IServiceContext
  | IRoomsContext
  | IStudentsContext
  | ITeachersContext;

export type ContextsProviders =
  | React.Context<IRoomsContext>
  | React.Context<IStudentsContext>
  | React.Context<ITeachersContext>;
