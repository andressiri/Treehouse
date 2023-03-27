// @route api/v1/rooms
import express from "express";
import {
  createRoom,
  editRoom,
  getRoom,
  getRooms,
  getRoomsWithRelations,
} from "../controllers/rooms";
import {
  authenticateAdmin,
  authenticateUser,
  checkRoomFields,
  validateRequestFields,
} from "../middlewares";
import {
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

roomsRouter.get("/room/:id", getRoom);

roomsRouter.put(
  "/edit/:id",
  authenticateUser,
  authenticateAdmin,
  checkRoomCapacityIsInt,
  checkRoomDescriptionLength,
  checkPublicIsBool,
  checkTeacherIdIsInt,
  validateRequestFields,
  checkRoomFields,
  editRoom
);

export default roomsRouter;
