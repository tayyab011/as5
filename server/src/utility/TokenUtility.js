
import jwt from "jsonwebtoken";
import { JWT_EXPIRATION_TIME, JWT_KEY } from "../config/config.js";

export const EncodeToken = (email, user_id) => {
 /*  console.log(email, user_id); */

  const KEY = JWT_KEY;
  const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
  const PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const DecodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_KEY);
  } catch (e) {
    return null;
  }
};
