// @route api/v1/rooms
import express from "express";
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
  authenticateAdmin,
  authenticateUser,
  checkRoomFields,
  validateRequestFields,
} from "../middlewares";
import {
  checkIntegerId,
  checkName,
  checkRoomCapacity,
  checkRoomCapacityIsInt,
  checkRoomDescriptionLength,
  checkPublicIsBool,
  checkTeacherIdIsInt,
} from "../helpers/validatorChecks";

const roomsRouter = express.Router();

roomsRouter.post(
  "/",
  authenticateUser,
  authenticateAdmin,
  checkName,
  checkRoomCapacity,
  checkRoomDescriptionLength,
  checkPublicIsBool,
  checkTeacherIdIsInt,
  validateRequestFields,
  checkRoomFields,
  createRoom
);

roomsRouter.get("/", getRooms);

roomsRouter.get("/all", getRoomsWithRelations);

roomsRouter.get("/room/:id", checkIntegerId, validateRequestFields, getRoom);

roomsRouter.put(
  "/edit/:id",
  authenticateUser,
  authenticateAdmin,
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
  "/teacher/:id",
  authenticateUser,
  authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  removeTeacher
);

roomsRouter.delete(
  "/delete/:id",
  authenticateUser,
  authenticateAdmin,
  checkIntegerId,
  validateRequestFields,
  deleteRoom
);

export default roomsRouter;
