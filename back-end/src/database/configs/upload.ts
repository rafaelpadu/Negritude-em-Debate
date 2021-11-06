import multer from "multer";
import crypto from "crypto";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const extensaoArquivo = file.originalname.split(".")[1];
    const nomeNovoArquivo = crypto.randomBytes(18).toString("hex");
    cb(null, `${nomeNovoArquivo}.${extensaoArquivo}`);
  },
});

const uploads = multer({ storage });

export default uploads;
