import { Gender } from "./global";
import { IRoom } from "./rooms";
import { ITeacher } from "./teachers";

export interface IStudent {
  id: number;
  name: string;
  age: number;
  gender: Gender;
  picture?: string;
  description?: string;
  roomId?: number;
  teacherId?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISibling {
  id: number;
  discount?: boolean;
  siblingIdA: number;
  siblingIdB: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IStudentWithSibling extends IStudent {
  Sibling: ISibling;
}

export interface IStudentWithRelations extends IStudent {
  Room: IRoom;
  Teacher: ITeacher;
  hasSibling: IStudentWithSibling[] | [];
}

export type AnyStudent = IStudent | IStudentWithRelations;

export type AnyStudentArray = IStudent[] | IStudentWithRelations[];
