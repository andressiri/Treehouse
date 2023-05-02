import { IStudent } from "./students";
import { ITeacher } from "./teachers";

export interface IRoom {
  id: number;
  name: string;
  capacity?: number;
  description?: string;
  image?: string;
  public?: boolean;
  teacherId?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRoomWithRelations extends IRoom {
  Teacher: ITeacher | object;
  Students: IStudent[] | [];
}

export type AnyRoom = IRoom | IRoomWithRelations;

export type AnyRoomArray = IRoom[] | IRoomWithRelations[];
