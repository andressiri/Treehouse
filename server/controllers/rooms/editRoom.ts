// @description Handle room edition
// @route PUT /api/v1/rooms/edit/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import { checkInvalidFields, uploadFile } from "../../helpers";
import { UploadedFile } from "express-fileupload";
import db from "../../db/models";

const { Room, Student } = db;

const editRoom = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];
  const validFields = [
    "name",
    "capacity",
    "description",
    "image",
    "public",
    "teacherId",
  ];
  const image = req.files && req.files.image ? req.files.image : null;
  let fieldsToEdit = req.body;

  const uploadedImage = image ? await uploadFile(image as UploadedFile) : null;

  if (uploadedImage) {
    fieldsToEdit = {
      ...fieldsToEdit,
      image: uploadedImage.Location,
    };
  }

  const fieldsToEditKeys = Object.keys(fieldsToEdit);
  checkInvalidFields(fieldsToEditKeys, validFields, res);

  const updateResult = await Room.update(fieldsToEdit, {
    where: { id },
    returning: true,
  });

  if (!updateResult[1].length) {
    res.status(404);
    throw new Error("There is no room for that id");
  }

  const roomData = { ...updateResult[1][0].dataValues };

  if (req.body.teacherId)
    await Student.update(
      {
        teacherId: req.body.teacherId,
      },
      {
        where: { roomId: req.params[BY_ID] },
      }
    );

  res
    .status(200)
    .json({ message: `${roomData.name} room updated`, data: roomData });
});

export default editRoom;
