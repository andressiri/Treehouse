import { Request, Response, NextFunction } from "express";

const checkUserAttributes = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const typesDictionary = {
    firstName: "string",
    lastName: "string",
    verified: "boolean",
    roleId: "role",
  };

  const arrayOfValidAttributes: string[] = req.params.id
    ? ["firstName", "lastName", "verified", "roleId"]
    : ["firstName", "lastName"];

  const bodyAttributes = Object.keys(req.body);

  if (!bodyAttributes.length) {
    res.status(400);
    throw new Error("Please send any field for update");
  }

  bodyAttributes.forEach((attribute: string) => {
    if (!arrayOfValidAttributes.includes(attribute)) {
      res.status(400);
      throw new Error("Please send valid user fields");
    }
    const typeToCheck =
      typesDictionary[attribute as keyof typeof typesDictionary];

    if (typeToCheck === "string") return;

    if (
      typeToCheck === "boolean" &&
      ["true", "false"].includes(req.body[attribute])
    )
      return;

    if (typeToCheck === "role" && ["1", "2", "4"].includes(req.body[attribute]))
      return;

    res.status(400);
    throw new Error(`Please send a valid value for field '${attribute}'`);
  });

  next();
};

export default checkUserAttributes;
