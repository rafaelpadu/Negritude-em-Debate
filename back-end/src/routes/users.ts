import { Router, Request, Response } from "express";
import { UserInput } from "../database/models/User";
import * as userService from "../service/userService";
const userRouter = Router();

// userRouter.get("/:id", () => {});

userRouter.post("/create", async (req: Request, res: Response) => {
  const payload: UserInput = req.body;
  if (
    payload.name &&
    payload.cpf &&
    payload.telefone &&
    payload.email &&
    payload.data_nascimento
  ) {
    const cpfExists = await userService.getByCPF(payload.cpf);
    if (!cpfExists) {
      const emailExists = await userService.getByEmail(payload.email);
      if (!emailExists) {
        await userService.create(payload);
        return res.status(200).json("Usuario criado com sucesso!");
      } else return res.status(401).json("Email já cadastrado!");
    } else return res.status(402).json("CPF já cadastrado no banco de dados!");
  } else {
    return res.status(403).json("Falha na criação de um novo usuário!");
  }
});

export default userRouter;
