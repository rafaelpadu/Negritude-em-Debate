import jwt from "jsonwebtoken";
import User from "../models/User";

const getUserByToken = async (token: string): Promise<User> => {
  const decoded = jwt.verify(token, "#$12CvB45") as User;
  const userId = decoded.id;

  const user = await User.findByPk(userId);

  return user;
};

export default getUserByToken;
