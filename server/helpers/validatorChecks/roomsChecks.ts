import { check } from "express-validator";

export const checkRoomCapacity = check("capacity")
  .not()
  .isEmpty()
  .withMessage("Please send a room capacity")
  .isInt()
  .withMessage("Please send a valid room capacity");
