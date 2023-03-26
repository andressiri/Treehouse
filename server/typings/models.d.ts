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
  id: string;
  name: string;
  description: string;
}

interface IRoom {
  id: string;
  name: string;
  capacity: number;
  description: string[];
  teacherId?: string;
}

interface ITeacher {
  id: string;
  name: string;
  age: number;
  gender: string;
  picture?: string;
  description: string;
}
