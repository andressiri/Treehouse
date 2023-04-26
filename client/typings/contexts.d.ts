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

export interface IRoomsContext extends IServiceContext {
  rooms: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  setRooms: React.Dispatch<React.SetStateAction<never[]>>;
  room: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  setRoom: React.Dispatch<React.SetStateAction<object>>;
}

export interface IStudentsContext extends IServiceContext {
  students: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  setStudents: React.Dispatch<React.SetStateAction<never[]>>;
  student: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  setStudent: React.Dispatch<React.SetStateAction<object>>;
}

export interface ITeachersContext extends IServiceContext {
  teachers: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  setTeachers: React.Dispatch<React.SetStateAction<never[]>>;
  teacher: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  setTeacher: React.Dispatch<React.SetStateAction<object>>;
}

export type ServicesContexts =
  | IServiceContext
  | IRoomsContext
  | IStudentsContext
  | ITeachersContext;

export type ContextsProviders =
  | React.Context<IRoomsContext>
  | React.Context<IStudentsContext>
  | React.Context<ITeachersContext>;
