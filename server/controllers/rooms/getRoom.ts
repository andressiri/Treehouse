// @description Get room by id
// @route GET /api/v1/rooms/room/:id
// @access Public
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../db/models";

const { Room } = db;

const getRoom = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];

  const roomData = await Room.findByPk(id);

  if (!roomData) {
    res.status(404);
    throw new Error("There is no room for that id");
  }

  res.status(200).json(roomData);
});

export default getRoom;
