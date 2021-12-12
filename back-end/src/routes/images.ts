import { Router } from "express";
import imageController from "../controllers/ImageController";
import imageUpload from "../helpers/image-upload";
import verifyToken from "../helpers/verify-token";
const imageRouter = Router();

imageRouter.post(
  "/register",
  verifyToken,
  imageUpload.array("images"),
  imageController.register
);
imageRouter.get("/get-all", imageController.getAllImages);
export default imageRouter;
