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

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginFormVisited {
  email: boolean;
  password: boolean;
}

export interface IRegisterFormData extends ILoginFormData {
  firstName: string;
  lastName: string;
}

export interface IRegisterFormVisited extends ILoginFormVisited {
  firstName: boolean;
  lastName: boolean;
}
