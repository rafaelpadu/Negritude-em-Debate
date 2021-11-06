import { Router, Request, Response } from "express";
import uploads from "../database/configs/upload";
const imageRouter = Router();
// const upload = multer({
//   dest: "./uploads/",
// });
imageRouter.post("/upload", async (req, res) => {
  res.send({ upload: true, files: req.files });
});

export default imageRouter;
