// @description Get user data
// @route GET /api/v1/users/me or /api/v1/users/user/:id
// @access Private - User logged or Admin
import asyncHandler from "express-async-handler";
import db from "../../db/models";
import { RequestWithUser } from "../../typings/express";

const { User } = db;

const userInfo = asyncHandler(async (req, res) => {
  const id = req.params.id || (req as RequestWithUser).user.id;

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
