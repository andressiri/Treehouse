// @description Get students with it's room and students
// @route GET /api/v1/students/all
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Room, Teacher, Student, Siblings } = db;

const getStudentsWithRelations = asyncHandler(async (_req, res) => {
  const students = await Student.findAll({
    include: [
      Room,
      Teacher,
      {
        model: Student,
        as: "hasSibling",
        foreignKey: "siblingIdA",
        through: { model: Siblings },
      },
    ],
  });

  if (!students[0]) {
    res.status(404);
    throw new Error("There are no students");
  }

  res.status(200).json(students);
});

export default getStudentsWithRelations;
