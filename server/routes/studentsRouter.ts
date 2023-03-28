// @route api/v1/teachers
import express from "express";
// import { byId, withRelations, edit, deletion } from "../config/constants";
import { createStudent, getStudents } from "../controllers/students";
import {
  authenticateAdmin,
  authenticateUser,
  validateRequestFields,
} from "../middlewares";
import {
  // checkIntegerId,
  checkName,
  checkAge,
  // checkAgeIsInt,
  checkGender,
  // checkGenderIsValid,
  checkDescriptionLength,
  checkRoomIdIsInt,
} from "../helpers/validatorChecks";

const studentsRouter = express.Router();

studentsRouter.post(
  "/",
  authenticateUser,
  authenticateAdmin,
  checkName,
  checkAge,
  checkGender,
  checkRoomIdIsInt,
  checkDescriptionLength,
  validateRequestFields,
  createStudent
);

studentsRouter.get("/", getStudents);

export default studentsRouter;
