import { Request } from "express";
import { IUser } from "./models";

export interface RequestWithUser extends Request {
  user: IUser;
}

export interface RequestWithSession {
  session: Session & Partial<SessionData> & CustomSessionFields;
}
