// @description Get teachers
// @route GET /api/v1/teachers
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Teacher } = db;

const getTeachers = asyncHandler(async (_req, res) => {
  const teachers = await Teacher.findAll({ raw: true });

  if (!teachers[0]) {
    res.status(404);
    throw new Error("There are no teachers");
  }

  res.status(200).json(teachers);
});

export default getTeachers;
