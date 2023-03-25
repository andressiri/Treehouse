import { RequestWithUser } from "../typings/express";
import { Request, Response, NextFunction } from "express";

const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { RoleId } = (req as RequestWithUser).user;

  if (!RoleId || ![2, 3].includes(RoleId)) {
    res.status(401);
    throw new Error("Access denied, admin credentials required");
  }

  next();
};

export default authenticateAdmin;
