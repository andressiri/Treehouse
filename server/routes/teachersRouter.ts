// @route api/v1/teachers
import express from "express";
import { byId, edit, withRelations } from "../config/constants";
import {
  createTeacher,
  editTeacher,
  getTeacher,
  getTeachers,
  getTeachersWithRelations,
} from "../controllers/teachers";
import {
  authenticateAdmin,
  authenticateUser,
  validateRequestFields,
} from "../middlewares";
import {
  checkIntegerId,
  checkName,
  checkAge,
  checkAgeIsInt,
  checkGender,
  checkGenderIsValid,
  checkDescriptionLength,
} from "../helpers/validatorChecks";

const teachersRouter = express.Router();

teachersRouter.post(
  "/",
  authenticateUser,
  authenticateAdmin,
  checkName,
  checkAge,
  checkGender,
  checkDescriptionLength,
  validateRequestFields,
  createTeacher
);

teachersRouter.get("/", getTeachers);

teachersRouter.get(`/${withRelations}`, getTeachersWithRelations);

teachersRouter.get(
  `/teacher/${byId}`,
  checkIntegerId,
  validateRequestFields,
  getTeacher
);

teachersRouter.put(
  `/${edit}/${byId}`,
  authenticateUser,
  authenticateAdmin,
  checkIntegerId,
  checkAgeIsInt,
  checkGenderIsValid,
  checkDescriptionLength,
  validateRequestFields,
  editTeacher
);

export default teachersRouter;
