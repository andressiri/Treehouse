// @route api/v1/teachers
import express from "express";
import { withRelations } from "../config/constants";
import {
  createTeacher,
  getTeachers,
  getTeachersWithRelations,
} from "../controllers/teachers";
import {
  authenticateAdmin,
  authenticateUser,
  validateRequestFields,
} from "../middlewares";
import {
  // checkIntegerId,
  checkName,
  checkAge,
  checkGender,
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

export default teachersRouter;
