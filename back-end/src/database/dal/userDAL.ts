import User, { UserInput, UserOutput } from "../models/User";

export const create = async (payload: UserInput): Promise<UserOutput> => {
  console.log(payload);
  const user = await User.create(payload);
  return user;
};

export const getById = async (payload: number): Promise<UserOutput> => {
  const user = await User.findByPk(payload);
  if (!user) {
    throw new Error("Usuário não encontrado");
  }
  return user;
};

export const getByCpf = async (cpf: string): Promise<boolean> => {
  const user = await User.findOne({ where: { cpf: cpf } });
  if (!user) {
    return false;
  } else {
    return true;
  }
};

export const getByEmail = async (email: string): Promise<boolean> => {
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return false;
  } else return true;
};
