import { JwtPayload } from "jsonwebtoken";

export interface JWToken extends JwtPayload {
  id: string;
}
