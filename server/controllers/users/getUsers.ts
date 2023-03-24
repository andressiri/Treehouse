// @description Get users data
// @route /api/v1/users
// @access Private - admin only (TODO)
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { User } = db;

const getUsers = asyncHandler(async (_req, res) => {
  const usersData = await User.findAll({
    raw: true,
    attributes: { exclude: ["password"] },
  });

  res.json({ usersData });
});

export default getUsers;
