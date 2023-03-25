// @description Handle user registration
// @route POST /api/v1/users/register
// @access Public
import asyncHandler from "express-async-handler";
import { createToken, hashPassword } from "../../helpers";
import db from "../../db/models";

const { User } = db;

const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const alreadyRegistered = await User.findOne({ where: { email } });
  if (alreadyRegistered) {
    res.status(409);
    throw new Error("That email is already registered");
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    verified: null,
    RoleId: 1,
  });

  const userData = {
    ...user.dataValues,
    token: createToken(user.dataValues.id),
  };
  delete userData.password;

  res.status(201).json({ message: "User registered", userData });
});

export default register;
