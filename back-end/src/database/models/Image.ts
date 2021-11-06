import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../configs/db_config";
import User from "./User";
interface ImageAttributes {
  id: number;
  title: string;
  author: string;
  img: string;
  imgName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ImageInput = Optional<ImageAttributes, "id">;
export type ImageOutput = Required<ImageAttributes>;

class Imagem
  extends Model<ImageAttributes, ImageInput>
  implements ImageAttributes
{
  public id!: number;
  public title!: string;
  public author!: string;
  public img!: string;
  public imgName!: string;
  //Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Imagem.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);
Imagem.belongsTo(User);

export default Imagem;
