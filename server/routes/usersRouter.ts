// @route api/v1/users
import express from "express";
import {
  changePassword,
  getUsers,
  login,
  register,
  userInfo,
  verificationCode,
} from "../controllers/users";
import {
  authenticateAdmin,
  authenticateUser,
  validateRequestFields,
} from "../middlewares";
import {
  checkUUID,
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

usersRouter.post(
  "/login",
  checkEmail,
  checkPassword,
  validateRequestFields,
  login
);

usersRouter.get("/", authenticateUser, authenticateAdmin, getUsers);

usersRouter.get(
  "/user/:id",
  authenticateUser,
  authenticateAdmin,
  checkUUID,
  validateRequestFields,
  userInfo
);

usersRouter.get("/me", authenticateUser, userInfo);

usersRouter.post("/verification", authenticateUser, verificationCode);

usersRouter.post(
  "/forgot-password",
  checkEmail,
  validateRequestFields,
  verificationCode
);

usersRouter.put(
  "/password",
  authenticateUser,
  checkPassword,
  validateRequestFields,
  changePassword
);

export default usersRouter;
