import jwt from "jsonwebtoken";
import { Response, Request } from "express";
import getToken from "./get-token";

interface IGetUserAuthRequest extends Request {
  user: string;
}

const verifyToken = (
  req: IGetUserAuthRequest,
  res: Response,
  next: () => void
) => {
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(402).json({ message: "Acesso negado!" });
  }
  const token = getToken(req);
  if (!token) {
    return res.status(402).json({ message: "Acesso negado!" });
  }
  try {
    const verified = jwt.verify(token, "#$12CvB45") as string;
    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Token inválido" });
  }
};

export default verifyToken;
