// @route api/v1/users
import express from "express";
import {
  BY_ID,
  DELETION,
  EDIT,
  USERS_SINGULAR,
  REGISTER,
  LOGIN,
  LOGOUT,
  MY_INFO,
  USER_VERIFICATION,
  BY_CODE,
  FORGOT_PASSWORD,
  USER_PASSWORD,
} from "../config/constants";
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
  `/${REGISTER}`,
  checkFirstName,
  checkLastName,
  checkEmail,
  checkPassword,
  validateRequestFields,
  register
);

usersRouter.post(
  `/${LOGIN}`,
  checkEmail,
  checkPassword,
  validateRequestFields,
  login
);

usersRouter.get("/", authenticateUser, authenticateAdmin, getUsers);

usersRouter.get(
  `/${USERS_SINGULAR}/:${BY_ID}`,
  authenticateUser,
  authenticateAdmin,
  checkUUID,
  validateRequestFields,
  userInfo
);

usersRouter.get(`/${MY_INFO}`, authenticateUser, userInfo);

usersRouter.post(`/${USER_VERIFICATION}`, authenticateUser, verificationCode);

usersRouter.post(
  `/${FORGOT_PASSWORD}`,
  checkEmail,
  validateRequestFields,
  verificationCode
);

usersRouter.put(`/${USER_VERIFICATION}/:${BY_CODE}`, userVerification);

usersRouter.put(
  `/${USER_PASSWORD}`,
  authenticateUser,
  checkPassword,
  validateRequestFields,
  changePassword
);

usersRouter.put(
  `/${EDIT}/:${BY_ID}`,
  authenticateUser,
  authenticateSuperAdmin,
  checkUUID,
  validateRequestFields,
  checkUserAttributes,
  editUser
);

usersRouter.put(`/${EDIT}`, authenticateUser, checkUserAttributes, editUser);

usersRouter.delete(
  `/${DELETION}/:${BY_ID}`,
  authenticateUser,
  checkUUID,
  validateRequestFields,
  deleteUser
);

usersRouter.delete(`/${LOGOUT}`, logout);

export default usersRouter;
