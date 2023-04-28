import { Gender } from "./global";
import { IRoom } from "./rooms";
import { IStudent } from "./students";

export interface ITeacher {
  id: number;
  name: string;
  age: number;
  gender: Gender;
  picture?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITeacherWithRelations extends ITeacher {
  Room: IRoom | object;
  Students: IStudent[] | [];
}

export type AnyTeacher = ITeacher | ITeacherWithRelations;

export type AnyTeacherArray = ITeacher[] | ITeacherWithRelations[];
