import { check } from "express-validator";

export const checkRoomCapacity = check("capacity")
  .not()
  .isEmpty()
  .withMessage("Please send a room capacity")
  .isInt()
  .withMessage("Please send a valid room capacity");

export const checkRoomCapacityIsInt = check("capacity")
  .optional()
  .isInt()
  .withMessage("Please send a valid room capacity");

export const checkRoomDescriptionLength = check("description")
  .optional()
  .isLength({ max: 4999 })
  .withMessage("Description max length is 5000 characters");

export const checkPublicIsBool = check("public")
  .optional()
  .isBoolean()
  .withMessage("Please send a valid public value");

export const checkTeacherIdIsInt = check("teacherId")
  .optional()
  .isInt()
  .withMessage("Please send a valid teacher id");
