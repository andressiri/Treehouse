// @description Handle teacher edition
// @route PUT /api/v1/teachers/edit/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import { checkInvalidFields, uploadFile } from "../../helpers";
import { UploadedFile } from "express-fileupload";
import db from "../../db/models";

const { Teacher } = db;

const editTeacher = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];
  const validFields = ["name", "age", "gender", "picture", "description"];
  const picture = req.files && req.files.picture ? req.files.picture : null;
  let fieldsToEdit = req.body;

  const uploadedImage = picture
    ? await uploadFile(picture as UploadedFile)
    : null;

  if (uploadedImage) {
    fieldsToEdit = {
      ...fieldsToEdit,
      picture: uploadedImage.Location,
    };
  }

  const fieldsToEditKeys = Object.keys(fieldsToEdit);
  checkInvalidFields(fieldsToEditKeys, validFields, res);

  const updateResult = await Teacher.update(fieldsToEdit, {
    where: { id },
    returning: true,
  });

  if (!updateResult[1].length) {
    res.status(404);
    throw new Error("There is no teacher for that id");
  }

  const teacherData = { ...updateResult[1][0].dataValues };

  res.status(200).json({
    message: `${teacherData.name} teacher updated`,
    data: teacherData,
  });
});

export default editTeacher;
