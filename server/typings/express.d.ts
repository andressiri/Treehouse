import { Request } from "express";
import { IUser } from "./models";

export interface RequestWithUser extends Request {
  user: IUser;
}
