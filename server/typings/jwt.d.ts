import { Jwt } from "jsonwebtoken";

export interface JWToken extends Jwt {
  id: string;
}
