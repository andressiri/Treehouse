// @description Handle student edition
// @route PUT /api/v1/students/edit/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import { checkInvalidFields, uploadFile } from "../../helpers";
import { UploadedFile } from "express-fileupload";
import db from "../../db/models";

const { Room, Student } = db;

const editStudent = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];
  const validFields = [
    "name",
    "age",
    "gender",
    "picture",
    "description",
    "roomId",
  ];
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

  if (req.body.roomId) {
    const roomToBeAdded = await Room.findOne({
      raw: true,
      where: { id: req.body.roomId },
      attributes: ["teacherId"],
    });

    if (!roomToBeAdded) {
      res.status(404);
      throw new Error("There is no room for that id");
    }

    fieldsToEdit = {
      ...fieldsToEdit,
      teacherId: roomToBeAdded.teacherId,
    };
  }

  const updateResult = await Student.update(fieldsToEdit, {
    where: { id },
    returning: true,
  });

  if (!updateResult[1].length) {
    res.status(404);
    throw new Error("There is no student for that id");
  }

  const studentData = { ...updateResult[1][0].dataValues };

  res
    .status(200)
    .json({ message: `${studentData.name} student updated`, studentData });
});

export default editStudent;
