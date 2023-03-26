export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified?: boolean;
  roleId?: number;
}

interface IRole {
  id: number;
  name: string;
  description: string;
}

interface IRoom {
  id: number;
  name: string;
  capacity: number;
  description: string[];
  teacherId?: number;
}

interface ITeacher {
  id: number;
  name: string;
  age: number;
  gender:
    | "female"
    | "male"
    | "intersex"
    | "trans"
    | "non-conforming"
    | "personal"
    | "eunuch";
  picture?: string;
  description: string;
}

interface IStudent {
  id: number;
  name: string;
  age: number;
  gender:
    | "female"
    | "male"
    | "intersex"
    | "trans"
    | "non-conforming"
    | "personal"
    | "eunuch";
  picture?: string;
  description: string;
  roomId?: number;
  teacherId?: number;
}
