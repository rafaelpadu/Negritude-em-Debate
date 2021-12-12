import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../database/db_config";
interface ImageAttributes {
  id: number;
  title: string;
  author: string;
  img: string;
  UserId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ImageInput = Optional<ImageAttributes, "id">;
export type ImageOutput = Required<ImageAttributes>;

class Image
  extends Model<ImageAttributes, ImageInput>
  implements ImageAttributes
{
  public id!: number;
  public title!: string;
  public author!: string;
  public img!: string;
  public UserId!: number;
  //Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Image.init(
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
    UserId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "image",
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);
export default Image;
