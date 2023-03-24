import jwt, { Secret } from "jsonwebtoken";

export const token = (id: string, temporary: boolean) => {
  let expiration = "30d";
  if (temporary) expiration = "300s";

  return jwt.sign({ id }, process.env.JWT_SECRET as Secret, {
    expiresIn: expiration,
  });
};
