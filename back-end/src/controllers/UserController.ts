import { Request, Response } from "express";
import { UserInput } from "../models/User";
import User from "../models/User";
import bcrypt from "bcrypt";
import createUserToken from "../helpers/create-user-token";

class UserControler {
  static register = async (req: Request, res: Response) => {
    const payload: UserInput = req.body;
    if (!this.checkFields(payload, res)) {
      return;
    }
    const cpfExists = await this.getByCpf(payload.cpf);
    if (cpfExists) {
      return res
        .status(422)
        .json({ message: "CPF já cadastrado no banco de dados!" });
    }
    const emailExists = await this.getByEmail(payload.email);
    if (emailExists) {
      return res.status(401).json({ message: "Email já cadastrado!" });
    }
    const passWordHash = await this.createPassword(payload.password);
    payload.password = passWordHash;
    await User.create(payload)
      .then(() =>
        res.status(200).json({ message: "Usuario criado com sucesso!" })
      )
      .catch(() => res.status(404).json({ message: "Erro ao criar usuario" }));
  };

  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória" });
      return;
    }

    const checkUser = await this.getByEmail(email);

    if (!checkUser) {
      res.status(422).json({ message: "Usuário não encontrado no sistema!" });
      return;
    }

    //Check Password
    const passwordCheck = await bcrypt.compare(password, checkUser.password);
    if (!passwordCheck) {
      res.status(422).json({ message: "Senha inválida" });
      return;
    }

    await createUserToken(checkUser, res);
  };

  static getByCpf = async (req: string): Promise<User> => {
    const user = await User.findOne({ where: { cpf: req } });
    return user;
  };
  static getByEmail = async (req: string): Promise<User> => {
    const user = await User.findOne({ where: { email: req } });
    return user;
  };

  static createPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(12);
    const newPassword = await bcrypt
      .hash(password, salt)
      .catch(() => console.log("Não foi possivel criar uma senha"));
    if (newPassword) {
      return newPassword;
    }
  };
  static checkFields = (req: UserInput, res: Response): boolean => {
    if (!req.name) {
      res
        .status(422)
        .json({ message: "O campo nome precisa estar preenchido" });
      return false;
    }
    if (!req.email) {
      res
        .status(422)
        .json({ message: "O campo email precisat estar preenchido" });
      return false;
    }
    if (!req.data_nascimento) {
      res
        .status(422)
        .json({ message: "A data de nascimento precisa estar preenchida" });
      return false;
    }
    if (!req.telefone) {
      res
        .status(422)
        .json({ message: "O campo telefone precisa estar preenchido" });
      return false;
    }
    if (!req.password) {
      res
        .status(422)
        .json({ message: "O campo senha precisa estar preenchido" });
      return false;
    } else {
      return true;
    }
  };
}
export default UserControler;
