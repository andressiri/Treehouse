// @description Get student by id
// @route GET /api/v1/students/student/:id
// @access Public
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../db/models";

const { Student } = db;

const getStudent = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];

  const studentData = await Student.findByPk(id);

  if (!studentData) {
    res.status(404);
    throw new Error("There is no student for that id");
  }

  res.status(200).json(studentData);
});

export default getStudent;
