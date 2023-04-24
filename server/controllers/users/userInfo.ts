// @description Get user data
// @route GET /api/v1/users/me or /api/v1/users/user/:id
// @access Private - User logged or Admin
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import { RequestWithUser } from "../../typings/express";
import db from "../../db/models";

const { User } = db;

const userInfo = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID] || (req as RequestWithUser).user.id;

  const userData = await User.findOne({
    raw: true,
    attributes: { exclude: ["password"] },
    where: { id },
  });

  if (!userData) {
    res.status(404);
    throw new Error("No user registered for that id");
  }

  res.json({ userData });
});

export default userInfo;
