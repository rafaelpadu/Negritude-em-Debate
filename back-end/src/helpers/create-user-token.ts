import jwt from "jsonwebtoken";
import User from "../models/User";
import { Request, Response } from "express";
export interface Token {
  name: string;
  id: number;
  iat?: number;
}
const createUsertoken = async (user: User, res: Response): Promise<void> => {
  const newToken: Token = {
    name: user.name,
    id: user.id,
  };
  const token = jwt.sign(newToken, "#$12CvB45");

  res
    .status(200)
    .json({ message: "Você está autenticado", token: token, userId: user.id });
};

export default createUsertoken;
