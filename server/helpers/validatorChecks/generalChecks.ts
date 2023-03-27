import { check, param } from "express-validator";

export const checkUUID = param("id")
  .not()
  .isEmpty()
  .isUUID(4)
  .withMessage("Please send a valid id");

export const checkIntegerId = param("id")
  .not()
  .isEmpty()
  .isInt()
  .withMessage("Please send a valid id");

export const checkName = check("name")
  .not()
  .isEmpty()
  .withMessage("Please send a name");

export const checkDescription = check("description")
  .not()
  .isEmpty()
  .withMessage("Please send a description");
