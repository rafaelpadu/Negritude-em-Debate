import { Request, Response } from "express";
import getToken from "../helpers/get-token";
import getUserByToken from "../helpers/get-user-by-token";
import Image from "../models/Image";
import User from "../models/User";
class ImageController {
  static register = async (req: Request, res: Response) => {
    const token = getToken(req);
    const imagem: Image = req.body;
    const files = req.files;
    console.log("Bateu");
    if (files.length === 0) {
      return res.status(404).json({ message: "Não foram encontrado imagens" });
    }
    if (!imagem.title) {
      return res
        .status(404)
        .json({ message: "A imagem precisa de um titulo!" });
    }
    if (!imagem.author) {
      return res.status(404).json({ message: "A imagem precisa de um autor!" });
    }
    const userID: User = await getUserByToken(token);

    imagem.img = files[0].filename;
    imagem.UserId = userID.id;
    await Image.create(imagem, {})
      .then(() =>
        res.status(200).json({ message: "Imagem cadastrada com sucesso!" })
      )
      .catch(() => {
        res
          .status(401)
          .json({ message: "Não foi possivel cadastrar a imagem!" });
      });
    return;
  };
  static getAllImages = async (req: Request, res: Response) => {
    const images = await Image.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(images);
  };
}

export default ImageController;
