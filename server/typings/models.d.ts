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

interface IPerson {
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

interface IStudent extends IPerson {
  roomId?: number;
  teacherId?: number;
}

interface ISibling {
  id: number;
  discount: boolean;
  sibilingIdA?: number;
  sibilingIdB?: number;
}
