import { Request } from "express";
import { IUser } from "./models";

export interface RequestWithUser extends Request {
  user: IUser;
}

declare module "express-session" {
  interface SessionData {
    user: IUser;
    code: string;
    emailToVerify: string;
    verified: boolean;
  }
}

export interface RequestWithSession {
  session: Session & Partial<SessionData> & CustomSessionFields;
}
