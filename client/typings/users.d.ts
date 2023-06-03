export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  password: string;
  verified?: boolean;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthUser extends IUser {
  token: string;
}

export interface IRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IRegisterFormVisited {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
}
