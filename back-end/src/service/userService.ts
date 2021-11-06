//Criamos o services que vai buscar o metodo criado no DAL(data access layer) e exportamos um metodo simples p/ ser usado no controler
import * as userDal from "../database/dal/userDAL";
import { UserInput, UserOutput } from "../database/models/User";

export const create = (payload: UserInput): Promise<UserOutput> => {
  return userDal.create(payload);
};

export const getById = (id: number): Promise<UserOutput> => {
  return userDal.getById(id);
};

export const getByCPF = (cpf: string): Promise<boolean> => {
  return userDal.getByCpf(cpf);
};

export const getByEmail = (email: string): Promise<boolean> => {
  return userDal.getByEmail(email);
};
