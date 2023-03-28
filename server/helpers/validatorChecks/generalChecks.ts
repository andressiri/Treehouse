import { check, param } from "express-validator";

export const checkUUID = param("id")
  .not()
  .isEmpty()
  .withMessage("Please send an id value")
  .isUUID(4)
  .withMessage("Please send a valid id");

export const checkIntegerId = param("id")
  .not()
  .isEmpty()
  .withMessage("Please send an id value")
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

export const checkAge = check("age")
  .not()
  .isEmpty()
  .withMessage("Please send an age value")
  .isInt()
  .withMessage("Please send a valid age value");

export const checkGender = check("gender")
  .not()
  .isEmpty()
  .withMessage("Please send a gender value")
  .isIn([
    "female",
    "male",
    "intersex",
    "trans",
    "non-conforming",
    "personal",
    "eunuch",
  ])
  .withMessage("Please send a valid gender");

export const checkDescriptionLength = check("description")
  .isLength({ max: 999 })
  .withMessage("Description max length is 4000 characters");
