import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../database/db_config";
import Imagem from "./Image";
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  cpf: string;
  telefone: string;
  password: string;
  data_nascimento: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserInput = Optional<UserAttributes, "id">;
export type UserOutput = Required<UserAttributes>;

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;

  public name!: string;

  public email!: string;

  public cpf!: string;
  public password!: string;
  public telefone!: string;
  public data_nascimento!: Date;
  // TimeStamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "usuario",
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
  }
);
User.hasMany(Imagem);
Imagem.belongsTo(User);
export default User;
