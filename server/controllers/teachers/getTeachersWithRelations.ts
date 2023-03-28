// @description Get teacher with it's room and students
// @route GET /api/v1/teachers/all
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../db/models";

const { Room, Teacher, Student } = db;

const getTeachersWithRelations = asyncHandler(async (_req, res) => {
  const teachers = await Teacher.findAll({ include: [Room, Student] });

  if (!teachers[0]) {
    res.status(404);
    throw new Error("There are no teachers");
  }

  res.status(200).json(teachers);
});

export default getTeachersWithRelations;
