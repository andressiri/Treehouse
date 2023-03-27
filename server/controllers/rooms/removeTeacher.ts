// @description Handle remove teacher
// @route DELETE /api/v1/rooms/teacher/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Room, Student } = db;

const removeTeacher = asyncHandler(async (req, res) => {
  const updateResult = await Room.update(
    { teacherId: null },
    {
      where: { id: req.params.id },
      returning: true,
    }
  );

  if (!updateResult[1].length) {
    res.status(404);
    throw new Error("There is no room for that id");
  }

  const roomData = { ...updateResult[1][0].dataValues };

  Student.update(
    {
      teacherId: null,
    },
    {
      where: { roomId: roomData.id },
    }
  );

  res.status(200).json({ message: `${roomData.name} room updated`, roomData });
});

export default removeTeacher;
