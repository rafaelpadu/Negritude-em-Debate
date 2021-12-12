import express, { Application } from "express";
import dbInit from "./database/init";
import cors from "cors";
import userRouter from "./routes/users";
import imageRouter from "./routes/images";
const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/users", userRouter);
app.use("/images", imageRouter);
app.use(function (req, res) {
  // Invalid request
  res.json({
    error: {
      name: "Error",
      status: 404,
      message: "Invalid Request",
      statusCode: 404,
      stack: "http://localhost:3001/",
    },
    message: "Rota inexistente!",
  });
});
try {
  dbInit();
  app.listen(port, () => console.log(`server is listening on ${port}`));
} catch (err) {
  console.log(`Error occurred: ${err.message}`);
}
