// @description Handle room creation
// @route POST /api/v1/rooms
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { uploadFile } from "../../helpers";
import { UploadedFile } from "express-fileupload";
import db from "../../db/models";

const { Room, Teacher } = db;

const createRoom = asyncHandler(async (req, res) => {
  const { name, capacity, description, teacherId } = req.body;
  const image = req.files && req.files.image ? req.files.image : null;

  const roomNameTaken = await Room.findOne({
    raw: true,
    attributes: ["name"],
    where: { name },
  });

  if (roomNameTaken) {
    res.status(409);
    throw new Error(`There is already a room with the name '${name}'`);
  }

  if (teacherId) {
    const teacher = await Teacher.findOne({
      where: { id: teacherId },
      include: Room,
    });

    if (!teacher) {
      res.status(404);
      throw new Error("There is no teacher for that id");
    }

    if (teacher.dataValues.Room.id) {
      res.status(409);
      throw new Error("That teacher has already been assigned a room");
    }
  }

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
