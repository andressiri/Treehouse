// @route api/v1/users
import express from "express";
import {
  changePassword,
  deleteUser,
  editUser,
  getUsers,
  login,
  logout,
  register,
  userInfo,
  verificationCode,
  userVerification,
} from "../controllers/users";
import {
  authenticateAdmin,
  authenticateSuperAdmin,
  authenticateUser,
  checkUserAttributes,
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

usersRouter.put("/verification/:code", userVerification);

usersRouter.put(
  "/password",
  authenticateUser,
  checkPassword,
  validateRequestFields,
  changePassword
);

usersRouter.put(
  "/edit/:id",
  authenticateUser,
  authenticateSuperAdmin,
  checkUUID,
  validateRequestFields,
  checkUserAttributes,
  editUser
);

usersRouter.put("/edit", authenticateUser, checkUserAttributes, editUser);

usersRouter.delete(
  "/delete/:id",
  authenticateUser,
  checkUUID,
  validateRequestFields,
  deleteUser
);

usersRouter.delete("/logout", logout);

export default usersRouter;
