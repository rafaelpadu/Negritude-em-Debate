import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../configs/db_config";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  cpf: string;
  telefone: string;
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
    freezeTableName: true,
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);

export default User;
