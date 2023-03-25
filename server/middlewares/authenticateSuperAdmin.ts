import { RequestWithUser } from "../typings/express";
import { Request, Response, NextFunction } from "express";

const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  if ((req as RequestWithUser).user.RoleId !== 3) {
    res.status(401);
    throw new Error("Access denied, super admin credentials required");
  }

  next();
};

export default authenticateAdmin;
