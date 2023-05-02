// @description Handle account delete
// @route DELETE /api/v1/users/delete/:id
// @access Logged user or SuperAdmin - Requires previous identity verification
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { BY_ID } from "../../config/constants";
import { RequestWithUser } from "../../typings/express";
import { IUser } from "../../typings/models";
import db from "../../db/models";

const { User } = db;

const deleteUser = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const id = req.params[BY_ID];

  if (!req.session.verified) {
    res.status(428);
    throw new Error("You have to verify your identity first");
  }

  const user: IUser = await User.findOne({
    raw: true,
    attributes: ["firstName", "lastName", "password", "roleId"],
    where: { id },
  });

  if (!user) {
    res.status(404);
    throw new Error("No user registered for that id");
  }

  if (user.roleId === 3) {
    res.status(403);
    throw new Error("This account can't be deleted, contact the owner");
  }

  try {
    if ((req as RequestWithUser).user.roleId !== 3) {
      if (id !== (req as RequestWithUser).user.id) {
        res.status(403);
        throw new Error("You can't delete that resource");
      }

      if (!password) {
        res.status(400);
        throw new Error("Please send a password");
      }

      if (!(await bcrypt.compare(password, user.password))) {
        res.status(401);
        throw new Error("Password incorrect");
      }

      req.session.destroy(() => {
        if (process.env.NODE_ENV === "development")
          console.log("Session destroyed"); // eslint-disable-line no-console
      });
    }
  } catch (error) {
    const statusCode = res.statusCode || 401;
    res.status(statusCode);
    throw new Error(error as string);
  }

  await User.destroy({
    where: { id },
  });

  res.status(200).json({
    message: `Deleted ${user.firstName} ${user.lastName}'s account`,
  });
});

export default deleteUser;
