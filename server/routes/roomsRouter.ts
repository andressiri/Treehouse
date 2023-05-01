// @route api/v1/rooms
import express from "express";
import {
  BY_ID,
  WITH_RELATIONS,
  EDIT,
  DELETION,
  ROOMS_SINGULAR,
  ROOMS_HANDLE_TEACHER,
} from "../config/constants";
import {
  createRoom,
  deleteRoom,
  editRoom,
  getRoom,
  getRooms,
  getRoomsWithRelations,
  getRoomWithRelations,
  removeTeacher,
} from "../controllers/rooms";
import {
  // authenticateAdmin, // temporary disabled until client has authentication developed
  // authenticateUser, // temporary disabled until client has authentication developed
  checkRoomFields,
  validateRequestFields,
} from "../middlewares";
import {
  checkIntegerId,
  checkName,
  // checkRoomCapacity, // temporary disabled until client has this field developed
  checkRoomCapacityIsInt,
  checkRoomDescriptionLength,
  checkPublicIsBool,
  checkTeacherIdIsInt,
} from "../helpers/validatorChecks";

const roomsRouter = express.Router();

roomsRouter.post(
  "/",
  // authenticateUser,
  // authenticateAdmin,
  checkName,
  // checkRoomCapacity,
  checkRoomDescriptionLength,
  checkPublicIsBool,
  checkTeacherIdIsInt,
  validateRequestFields,
  checkRoomFields,
  createRoom
);

roomsRouter.get("/", getRooms);

roomsRouter.get(`/${WITH_RELATIONS}`, getRoomsWithRelations);

roomsRouter.get(
  `/${ROOMS_SINGULAR}/:${BY_ID}`,
  checkIntegerId,
  validateRequestFields,
  getRoom
);

roomsRouter.get(
  `/${ROOMS_SINGULAR}/${WITH_RELATIONS}/:${BY_ID}`,
  checkIntegerId,
  validateRequestFields,
  getRoomWithRelations
);

roomsRouter.put(
  `/${EDIT}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  checkRoomCapacityIsInt,
  checkRoomDescriptionLength,
  checkPublicIsBool,
  checkTeacherIdIsInt,
  validateRequestFields,
  checkRoomFields,
  editRoom
);

roomsRouter.delete(
  `/${ROOMS_HANDLE_TEACHER}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  removeTeacher
);

roomsRouter.delete(
  `/${DELETION}/:${BY_ID}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  deleteRoom
);

export default roomsRouter;
