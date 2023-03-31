// @route api/v1/rooms
import express from "express";
import { byId, withRelations, edit, deletion } from "../config/constants";
import {
  createRoom,
  deleteRoom,
  editRoom,
  getRoom,
  getRooms,
  getRoomsWithRelations,
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

roomsRouter.get(`/${withRelations}`, getRoomsWithRelations);

roomsRouter.get(
  `/room/${byId}`,
  checkIntegerId,
  validateRequestFields,
  getRoom
);

roomsRouter.put(
  `/${edit}/${byId}`,
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
  `/teacher/${byId}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  removeTeacher
);

roomsRouter.delete(
  `/${deletion}/${byId}`,
  // authenticateUser,
  // authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  deleteRoom
);

export default roomsRouter;
