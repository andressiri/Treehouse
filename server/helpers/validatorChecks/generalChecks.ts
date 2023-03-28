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

export const checkAge = check("age")
  .not()
  .isEmpty()
  .withMessage("Please send an age value")
  .isInt()
  .withMessage("Please send a valid age value");

export const checkAgeIsInt = check("age")
  .optional()
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

export const checkGenderIsValid = check("gender")
  .optional()
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

export const checkDescription = check("description")
  .not()
  .isEmpty()
  .withMessage("Please send a description")
  .isLength({ max: 999 })
  .withMessage("Description max length is 4000 characters");

export const checkDescriptionLength = check("description")
  .optional()
  .isLength({ max: 999 })
  .withMessage("Description max length is 4000 characters");

export const checkTeacherIdIsInt = check("teacherId")
  .optional()
  .isInt()
  .withMessage("Please send a valid teacher id");

export const checkRoomIdIsInt = check("roomId")
  .optional()
  .isInt()
  .withMessage("Please send a valid room id");

export const checkSiblingId = check("siblingId")
  .not()
  .isEmpty()
  .withMessage("Please send a sibling id")
  .isInt()
  .withMessage("Please send a valid sibling id");
