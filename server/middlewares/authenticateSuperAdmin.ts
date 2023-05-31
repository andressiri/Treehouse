import { RequestWithUser } from "../typings/express";
import { Request, Response, NextFunction } from "express";
import { SUPER_ADMIN_ROLE } from "../config/constants";

const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  if ((req as RequestWithUser).user.roleId !== SUPER_ADMIN_ROLE) {
    res.status(401);
    throw new Error("Access denied, super admin credentials required");
  }

  next();
};

export default authenticateAdmin;
