// @description Get room by id
// @route GET /api/v1/rooms/room/:id
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Room, Teacher, Student } = db;

const getRoom = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const roomData = await Room.findByPk(id, { include: [Teacher, Student] });

  if (!roomData) {
    res.status(404);
    throw new Error("There is no room for that id");
  }

  res.status(200).json(roomData);
});

export default getRoom;
