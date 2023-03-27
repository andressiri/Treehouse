// @description Get rooms with it's teacher and students
// @route GET /api/v1/rooms/all
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Room, Teacher, Student } = db;

const getRoomsWithRelations = asyncHandler(async (_req, res) => {
  const rooms = await Room.findAll({ include: [Teacher, Student] });

  if (!rooms[0]) {
    res.status(404);
    throw new Error("There are no rooms");
  }

  res.status(200).json(rooms);
});

export default getRoomsWithRelations;
