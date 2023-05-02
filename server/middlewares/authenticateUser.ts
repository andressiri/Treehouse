import asyncHandler from "express-async-handler";
import jwt, { Secret } from "jsonwebtoken";
import db from "../db/models";
import { RequestWithUser } from "../typings/express";
import { JWToken } from "../typings/jwt";
import { IUser } from "../typings/models";
import { Request, Response, NextFunction } from "express";

const { User } = db;

const authenticateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token = "";
    let decodedToken: JWToken;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      try {
        // Verify token
        decodedToken = jwt.verify(
          token,
          process.env.JWT_SECRET as Secret
        ) as JWToken;
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized, invalid token");
      }

      // Get user from the token
      const user: IUser = await User.findOne({
        raw: true,
        attributes: { exclude: ["password"] },
        where: { id: (decodedToken as JWToken)?.id },
      });

      // Check if token contained a valid user
      if (!user) {
        res.status(401);
        throw new Error("Not authorized");
      }

      (req as RequestWithUser).user = user;

      next();
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

export default authenticateUser;
