// @description Handle login authentication
// @route POST /api/v1/users/login
// @access Public
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { createToken } from "../../helpers";
import db from "../../db/models";

const { User } = db;

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    res.status(404);
    throw new Error("No user registered with that email");
  }

  if (user.dataValues.roleId === 4) {
    res.status(403);
    throw new Error("Banned user, login disabled");
  }

  const userData = {
    ...user.dataValues,
    token: createToken(user.dataValues.id),
  };
  delete userData.password;

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({ message: "User authenticated", data: userData });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

export default login;
