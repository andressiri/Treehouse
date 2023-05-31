import { RequestWithUser } from "../typings/express";
import { Request, Response, NextFunction } from "express";
import { ADMIN_ROLE, SUPER_ADMIN_ROLE } from "../config/constants";

const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { roleId } = (req as RequestWithUser).user;

  if (!roleId || ![ADMIN_ROLE, SUPER_ADMIN_ROLE].includes(roleId)) {
    res.status(401);
    throw new Error("Access denied, admin credentials required");
  }

  next();
};

export default authenticateAdmin;
