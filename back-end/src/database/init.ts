import User from "../models/User";
import Image from "../models/Image";
const dbInit = () => {
  User.sync().then(() => console.log("Banco de dados Conectado!"));
  Image.sync({ alter: true }).then(() => console.log("Imagem conectada"));
};

export default dbInit;
