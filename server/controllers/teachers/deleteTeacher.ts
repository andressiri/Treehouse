// @description Handle delete teacher
// @route DELETE /api/v1/teachers/delete/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../db/models";

const { Room, Teacher, Student } = db;

const deleteTeacher = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];

  const teacherFound = await Teacher.findOne({
    raw: true,
    where: { id },
    attributes: ["id", "name"],
    include: {
      model: Room,
      attributes: ["id"],
    },
  });

  if (!teacherFound) {
    res.status(404);
    throw new Error("There is no teacher for that id");
  }

  if (teacherFound.Room?.id)
    await Student.update(
      { teacherId: null },
      { where: { roomId: teacherFound.Room.id } }
    );

  await Teacher.destroy({
    where: { id },
  });

  res.status(200).json({ message: `Deleted ${teacherFound.name} teacher` });
});

export default deleteTeacher;
