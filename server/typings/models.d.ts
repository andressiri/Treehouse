export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified?: boolean;
}

interface IRole {
  id: string;
  name: string;
  description: string;
}
