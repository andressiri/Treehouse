// @description Handle change password
// @route PUT /api/v1/users/password
// @access Private
import asyncHandler from "express-async-handler";
import { hashPassword } from "../../helpers";
import { RequestWithUser } from "../../typings/express";
import db from "../../db/models";

const { User } = db;

const changePassword = asyncHandler(async (req, res) => {
  const password = req.body.password;

  const hashedPassword = await hashPassword(password);

  await User.update(
    { password: hashedPassword },
    { where: { id: (req as RequestWithUser).user.id } }
  );

  res.status(200).json({ message: "Password updated" });
});

export default changePassword;
