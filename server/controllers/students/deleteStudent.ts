// @description Handle delete student
// @route DELETE /api/v1/students/delete/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Student } = db;

const deleteStudent = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const studentFound = await Student.findOne({
    raw: true,
    where: { id },
    attributes: ["id", "name"],
  });

  if (!studentFound) {
    res.status(404);
    throw new Error("There is no student for that id");
  }

  await Student.destroy({
    where: { id },
  });

  res.status(200).json({ message: `Deleted ${studentFound.name} student` });
});

export default deleteStudent;
