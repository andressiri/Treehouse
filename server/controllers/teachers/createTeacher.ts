// @description Handle teacher creation
// @route POST /api/v1/teachers
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { uploadFile } from "../../helpers";
import { UploadedFile } from "express-fileupload";
import db from "../../db/models";

const { Teacher } = db;

const createTeacher = asyncHandler(async (req, res) => {
  const { name, age, gender, description } = req.body;
  const picture = req.files && req.files.picture ? req.files.picture : null;

  const uploadedImage = picture
    ? await uploadFile(picture as UploadedFile)
    : null;

  const createResult = await Teacher.create({
    name,
    age,
    gender,
    picture: uploadedImage ? uploadedImage.Location : uploadedImage,
    description,
  });

  res.status(201).json({
    message: `${name} teacher created`,
    data: createResult.dataValues,
  });
});

export default createTeacher;
