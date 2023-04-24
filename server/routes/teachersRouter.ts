// @route api/v1/teachers
import express from "express";
import {
  BY_ID,
  WITH_RELATIONS,
  EDIT,
  DELETION,
  TEACHERS_SINGULAR,
} from "../config/constants";
import {
  createTeacher,
  deleteTeacher,
  editTeacher,
  getTeacher,
  getTeachers,
  getTeachersWithRelations,
} from "../controllers/teachers";
import {
  // authenticateAdmin, // temporary disabled until client has authentication developed
  // authenticateUser, // temporary disabled until client has authentication developed
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
  // authenticateUser,
  // authenticateAdmin,
  checkName,
  checkAge,
  checkGender,
  checkDescriptionLength,
  validateRequestFields,
  createTeacher
);

teachersRouter.get("/", getTeachers);

teachersRouter.get(`/${WITH_RELATIONS}`, getTeachersWithRelations);

teachersRouter.get(
  `/${TEACHERS_SINGULAR}/:${BY_ID}`,
  checkIntegerId,
  validateRequestFields,
  getTeacher
);

teachersRouter.put(
  `/${EDIT}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  checkAgeIsInt,
  checkGenderIsValid,
  checkDescriptionLength,
  validateRequestFields,
  editTeacher
);

teachersRouter.delete(
  `/${DELETION}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  deleteTeacher
);

export default teachersRouter;
