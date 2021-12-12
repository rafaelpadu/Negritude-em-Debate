import { Router } from "express";
import userController from "../controllers/UserController";
const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);

export default userRouter;
