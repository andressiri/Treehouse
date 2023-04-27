// @description Handle remove student from room
// @route DELETE /api/v1/students/room/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../db/models";

const { Student } = db;

const removeFromRoom = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];

  const updateResult = await Student.update(
    { roomId: null, teacherId: null },
    { where: { id }, returning: true }
  );

  if (!updateResult[1].length) {
    res.status(404);
    throw new Error("There is no student for that id");
  }

  const studentData = { ...updateResult[1][0].dataValues };

  res.status(200).json({
    message: `${studentData.name} removed from it's room`,
    data: studentData,
  });
});

export default removeFromRoom;
