// @description Handle room creation
// @route POST /api/v1/rooms
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { uploadFile } from "../../helpers";
import { UploadedFile } from "express-fileupload";
import db from "../../db/models";

const { Room } = db;

const createRoom = asyncHandler(async (req, res) => {
  const { name, capacity, description, teacherId } = req.body;
  const image = req.files && req.files.image ? req.files.image : null;

  const uploadedImage = image ? await uploadFile(image as UploadedFile) : null;

  const createResult = await Room.create({
    name,
    capacity,
    description,
    image: uploadedImage ? uploadedImage.Location : uploadedImage,
    teacherId,
  });

  res.status(201).json({
    message: "Room created",
    roomData: createResult.dataValues,
  });
});

export default createRoom;
