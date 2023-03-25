import { validationResult, Result } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validateRequestFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: Result = validationResult(req);

  if (!result.isEmpty()) {
    res.status(400);
    throw new Error(result.array({ onlyFirstError: true })[0].msg);
  }

  next();
};

export default validateRequestFields;
