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
  TeacherId?: string;
}

interface ITeacher {
  id: string;
  name: string;
  description: string[];
}
