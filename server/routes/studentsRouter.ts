// @route api/v1/teachers
import express from "express";
import {
  BY_ID,
  WITH_RELATIONS,
  EDIT,
  DELETION,
  STUDENTS_SINGULAR,
  STUDENTS_HANDLE_ROOM,
  STUDENTS_HANDLE_SIBLINGS,
} from "../config/constants";
import {
  addSibling,
  createStudent,
  deleteStudent,
  editStudent,
  getStudent,
  getStudents,
  getStudentsWithRelations,
  removeFromRoom,
  removeSibling,
} from "../controllers/students";
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
  checkRoomIdIsInt,
  checkSiblingId,
} from "../helpers/validatorChecks";

const studentsRouter = express.Router();

studentsRouter.post(
  "/",
  // authenticateUser,
  // authenticateAdmin,
  checkName,
  checkAge,
  checkGender,
  checkRoomIdIsInt,
  checkDescriptionLength,
  validateRequestFields,
  createStudent
);

studentsRouter.get("/", getStudents);

studentsRouter.get(`/${WITH_RELATIONS}`, getStudentsWithRelations);

studentsRouter.get(
  `/${STUDENTS_SINGULAR}/:${BY_ID}`,
  checkIntegerId,
  validateRequestFields,
  getStudent
);

studentsRouter.put(
  `/${EDIT}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  checkAgeIsInt,
  checkGenderIsValid,
  checkDescriptionLength,
  checkRoomIdIsInt,
  validateRequestFields,
  editStudent
);

studentsRouter.delete(
  `/${STUDENTS_HANDLE_ROOM}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  removeFromRoom
);

studentsRouter.delete(
  `/${DELETION}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  deleteStudent
);

studentsRouter.put(
  `/${STUDENTS_HANDLE_SIBLINGS}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  checkSiblingId,
  validateRequestFields,
  addSibling
);

studentsRouter.delete(
  `/${STUDENTS_HANDLE_SIBLINGS}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  checkSiblingId,
  validateRequestFields,
  removeSibling
);

export default studentsRouter;
