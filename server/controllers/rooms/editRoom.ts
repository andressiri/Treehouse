// @description Handle room edition
// @route PUT /api/v1/rooms/edit/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { uploadFile } from "../../helpers";
import { UploadedFile } from "express-fileupload";
import db from "../../db/models";

const { Room, Student } = db;

const editRoom = asyncHandler(async (req, res) => {
  let fieldsToEdit = req.body;
  const image = req.files && req.files.image ? req.files.image : null;

  const uploadedImage = image ? await uploadFile(image as UploadedFile) : null;

  if (uploadedImage) {
    fieldsToEdit = {
      ...fieldsToEdit,
      image: uploadedImage.Location,
    };
  }

  if (!Object.keys(fieldsToEdit).length) {
    res.status(400);
    throw new Error("There is nothing to edit");
  }

  const updateResult = await Room.update(fieldsToEdit, {
    where: { id: req.params.id },
    returning: true,
  });

  if (!updateResult[1].length) {
    res.status(404);
    throw new Error("There is no room for that id");
  }

  const roomData = { ...updateResult[1][0].dataValues };

  if (req.body.teacherId)
    Student.update(
      {
        teacherId: req.body.teacherId,
      },
      {
        where: { roomId: req.params.id },
      }
    );

  res.status(200).json({ message: `${roomData.name} room updated`, roomData });
});

export default editRoom;
