import jwt, { Secret } from "jsonwebtoken";

const createToken = (id: string, temporary?: boolean) => {
  let expiration = "30d";
  if (temporary) expiration = "300s";

  return jwt.sign({ id }, process.env.JWT_SECRET as Secret, {
    expiresIn: expiration,
  });
};

export default createToken;
