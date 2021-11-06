import express, { Application } from "express";
import routes from "./routes";
import dbInit from "./database/init";
import User from "./database/models/User";
import cors from "cors";
const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes);

try {
  dbInit();
  User.sync().then(() => {
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  });
} catch (err) {
  console.log(`Error occurred: ${err.message}`);
}
