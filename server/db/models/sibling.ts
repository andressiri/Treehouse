import { DataTypes, Model, Sequelize } from "sequelize";
import { ISibling } from "../../typings/models";

const SiblingModel = (sequelize: Sequelize) => {
  class Sibling extends Model<ISibling> implements ISibling {
    declare id: number;
    declare discount: boolean;
    declare siblingIdA: number;
    declare siblingIdB: number;
  }

  Sibling.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      discount: DataTypes.BOOLEAN,
      sibilingIdA: DataTypes.INTEGER,
      sibilingIdB: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sibling",
      tableName: "Siblings",
    }
  );

  return Sibling;
};

export default SiblingModel;
