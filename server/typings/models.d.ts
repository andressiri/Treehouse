export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified?: boolean;
  roleId: number;
}
export interface IRole {
  id: number;
  name: string;
  description: string;
}

export interface IRoom {
  id: number;
  name: string;
  capacity: number;
  description: string;
  image: string;
  public: boolean;
  teacherId?: number;
}

export interface IPerson {
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

export interface IStudent extends IPerson {
  roomId?: number;
  teacherId?: number;
}

export interface ISibling {
  id: number;
  discount: boolean;
  siblingIdA: number;
  siblingIdB: number;
}
