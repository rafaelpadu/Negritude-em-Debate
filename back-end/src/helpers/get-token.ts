import { Request } from "express";

const getToken = (req: Request): string => {
  const tokenFull = req.headers.authorization;
  console.log(req.headers);
  const token = tokenFull.split(" ")[1];
  console.log(token);
  return token;
};

export default getToken;
