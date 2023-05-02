// @description Handle change name
// @route PUT /api/v1/users/edit or /api/v1/users/edit/:id
// @access Private or SuperAdmin
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import { RequestWithUser } from "../../typings/express";
import db from "../../db/models";

const { User } = db;

const editUser = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID] || (req as RequestWithUser).user.id;

  const updateResult = await User.update(req.body, {
    where: { id },
    returning: true,
  });

  if (!updateResult[1].length) {
    res.status(404);
    throw new Error("No user registered for that id");
  }

  const userData = { ...updateResult[1][0].dataValues };
  delete userData.password;

  res.status(200).json({ message: "User updated", data: userData });
});

export default editUser;
