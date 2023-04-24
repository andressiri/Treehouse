// @description Get teacher by id
// @route GET /api/v1/teachers/teacher/:id
// @access Public
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../db/models";

const { Room, Teacher, Student } = db;

const getTeacher = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];

  const teacherData = await Teacher.findByPk(id, { include: [Room, Student] });

  if (!teacherData) {
    res.status(404);
    throw new Error("There is no teacher for that id");
  }

  res.status(200).json(teacherData);
});

export default getTeacher;
