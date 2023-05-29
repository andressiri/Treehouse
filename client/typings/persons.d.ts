import { Gender } from "./global";

export interface IPerson {
  id: number;
  name: string;
  age: number;
  gender: Gender;
  picture?: string;
  description?: string;
}

export interface IPersonFormData {
  name: string;
  age: string;
  gender: Gender | "";
  description?: string;
  roomId?: string;
}

export interface IPersonFormVisited {
  name: boolean;
  age: boolean;
  gender: boolean;
  description?: boolean;
  roomId?: boolean;
}
