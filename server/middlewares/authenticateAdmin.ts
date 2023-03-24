import { RequestWithUser } from "../typings/express";
import { Response, NextFunction } from "express";

const checkAdmin = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.user.RoleId !== 2) {
    res.status(401);
    throw new Error("Access denied, admin credentials required");
  }

  next();
};

module.exports = checkAdmin;
