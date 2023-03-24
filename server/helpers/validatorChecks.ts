import { check } from "express-validator";

export const checkName = check("name")
  .not()
  .isEmpty()
  .withMessage("Please send a name");

// Users
export const checkFirstName = check("firstName")
  .not()
  .isEmpty()
  .withMessage("Please send a first name");

export const checkLastName = check("lastName")
  .not()
  .isEmpty()
  .withMessage("Please send a last name");

export const checkEmail = check("email")
  .not()
  .isEmpty()
  .withMessage("Please send an email")
  .isEmail()
  .withMessage("Please send a valid email");

export const checkPassword = check("password")
  .not()
  .isEmpty()
  .withMessage("Please send a password")
  .isLength({ min: 6 })
  .withMessage("Password must have at least six characters");
