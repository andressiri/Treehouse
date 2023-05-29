import { IPerson } from "./persons";
import { IRoom } from "./rooms";
import { IStudent } from "./students";

export interface ITeacher extends IPerson {
  createdAt: Date;
  updatedAt: Date;
}

export interface ITeacherWithRelations extends ITeacher {
  Room: IRoom | object;
  Students: IStudent[] | [];
}

export type AnyTeacher = ITeacher | ITeacherWithRelations;

export type AnyTeacherArray = ITeacher[] | ITeacherWithRelations[];
