// @description Handle student creation
// @route POST /api/v1/students
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { uploadFile } from "../../helpers";
import { UploadedFile } from "express-fileupload";
import db from "../../db/models";

const { Room, Student } = db;

const createStudent = asyncHandler(async (req, res) => {
  const { name, age, gender, description, roomId } = req.body;
  let teacherId: number | null = null;
  const picture = req.files && req.files.picture ? req.files.picture : null;

  const uploadedImage = picture
    ? await uploadFile(picture as UploadedFile)
    : null;

  if (roomId) {
    const roomToBeAdded = await Room.findOne({
      raw: true,
      where: { id: roomId },
      attributes: ["teacherId"],
    });

    if (!roomToBeAdded) {
      res.status(404);
      throw new Error("There is no room for that id");
    }

    teacherId = roomToBeAdded.teacherId;
  }

  const createResult = await Student.create({
    name,
    age,
    gender,
    picture: uploadedImage ? uploadedImage.Location : uploadedImage,
    description,
    roomId,
    teacherId,
  });

  res.status(201).json({
    message: `${name} student created`,
    StudentData: createResult.dataValues,
  });
});

export default createStudent;
