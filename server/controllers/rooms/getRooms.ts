// @description Get rooms
// @route GET /api/v1/rooms
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Room } = db;

const getRooms = asyncHandler(async (_req, res) => {
  const rooms = await Room.findAll({ raw: true });

  if (!rooms[0]) {
    res.status(404);
    throw new Error("There are no rooms");
  }

  res.status(200).json(rooms);
});

export default getRooms;
