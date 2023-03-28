// @description Get students
// @route GET /api/v1/students
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Student } = db;

const getStudents = asyncHandler(async (_req, res) => {
  const students = await Student.findAll({ raw: true });

  if (!students[0]) {
    res.status(404);
    throw new Error("There are no students");
  }

  res.status(200).json(students);
});

export default getStudents;
