import { Router } from "express";
import userRouter from "./users";
import imageRouter from "./images";

const router = Router();

router.use("/users", userRouter);
router.use("/images", imageRouter);
export default router;
