import { Response } from "express";

const checkInvalidFields = (
  fieldsToEditKeys: string[],
  validFields: string[],
  res: Response
) => {
  const invalidFieldExists = fieldsToEditKeys.filter((key) => {
    return !validFields.includes(key) ? key : null;
  });

  if (invalidFieldExists.length) {
    res.status(400);
    throw new Error(
      `There are invalid fields: ${invalidFieldExists.join(", ")}`
    );
  }

  if (!fieldsToEditKeys.length) {
    res.status(400);
    throw new Error("There is nothing to edit");
  }
};

export default checkInvalidFields;
