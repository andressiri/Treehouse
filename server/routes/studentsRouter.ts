// @route api/v1/teachers
import express from "express";
import { byId, withRelations, edit, deletion } from "../config/constants";
import {
  createStudent,
  editStudent,
  getStudent,
  getStudents,
  getStudentsWithRelations,
  removeFromRoom,
} from "../controllers/students";
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

studentsRouter.get(`/${withRelations}`, getStudentsWithRelations);

studentsRouter.get(
  `/student/${byId}`,
  checkIntegerId,
  validateRequestFields,
  getStudent
);

studentsRouter.put(
  `/${edit}/${byId}`,
  authenticateUser,
  authenticateAdmin,
  checkIntegerId,
  checkAgeIsInt,
  checkGenderIsValid,
  checkDescriptionLength,
  checkRoomIdIsInt,
  validateRequestFields,
  editStudent
);

studentsRouter.delete(
  `/room/${byId}`,
  authenticateUser,
  authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  removeFromRoom
);

studentsRouter.delete(
  `/${deletion}/${byId}`,
  authenticateUser,
  authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  removeFromRoom
);

export default studentsRouter;
