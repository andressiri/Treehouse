// @route api/v1/users
import express from "express";
import { getUsers, register } from "../controllers/users";
import {
  authenticateAdmin,
  authenticateUser,
  validateRequestFields,
} from "../middlewares";
import {
  checkFirstName,
  checkLastName,
  checkEmail,
  checkPassword,
} from "../helpers/validatorChecks";

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  checkFirstName,
  checkLastName,
  checkEmail,
  checkPassword,
  validateRequestFields,
  register
);

usersRouter.get("/", authenticateUser, authenticateAdmin, getUsers);

export default usersRouter;
