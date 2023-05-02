// @description Handle delete room
// @route DELETE /api/v1/rooms/delete/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../db/models";

const { Room, Student } = db;

const deleteRoom = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];

  const roomFound = await Room.findOne({
    raw: true,
    where: { id },
    attributes: ["id", "name"],
  });

  if (!roomFound) {
    res.status(404);
    throw new Error("There is no room for that id");
  }

  await Student.update(
    { teacherId: null },
    { where: { roomId: roomFound.id } }
  );

  await Room.destroy({
    where: { id },
  });

  res.status(200).json({ message: `Deleted ${roomFound.name} room` });
});

export default deleteRoom;
