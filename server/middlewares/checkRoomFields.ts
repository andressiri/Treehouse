import asyncHandler from "express-async-handler";
import db from "../db/models";

const { Room, Teacher } = db;

const validateRoomFields = asyncHandler(async (req, res, next) => {
  const { name, teacherId } = req.body;

  if (name) {
    const roomNameTaken = await Room.findOne({
      raw: true,
      attributes: ["id", "name"],
      where: { name },
    });

    if (
      roomNameTaken &&
      (!req.params.id || roomNameTaken.id !== Number(req.params.id))
    ) {
      res.status(409);
      throw new Error(`There is already a room with the name '${name}'`);
    }
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

  next();
});

export default validateRoomFields;
