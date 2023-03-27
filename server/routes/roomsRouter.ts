// @route api/v1/rooms
import express from "express";
import {
  createRoom,
  getRooms,
  getRoomsWithRelations,
} from "../controllers/rooms";
import {
  authenticateAdmin,
  // authenticateSuperAdmin,
  authenticateUser,
  validateRequestFields,
} from "../middlewares";
import {
  // checkUUID,
  checkName,
  checkRoomCapacity,
} from "../helpers/validatorChecks";

const roomsRouter = express.Router();

roomsRouter.post(
  "/",
  authenticateUser,
  authenticateAdmin,
  checkName,
  checkRoomCapacity,
  validateRequestFields,
  createRoom
);

roomsRouter.get("/", getRooms);

roomsRouter.get("/all", getRoomsWithRelations);

export default roomsRouter;
