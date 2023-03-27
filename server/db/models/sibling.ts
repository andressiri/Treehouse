import { DataTypes, Model, Sequelize } from "sequelize";
import { ISibling } from "../../typings/models";

const SiblingModel = (sequelize: Sequelize) => {
  class Sibling extends Model<ISibling> implements ISibling {
    declare id: number;
    declare discount: boolean;
    declare siblingIdA: number;
    declare siblingIdB: number;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Sibling.belongsTo(models.Student, {
        foreignKey: "siblingIdA",
        as: "hasASibling",
      });

      Sibling.belongsTo(models.Student, {
        foreignKey: "siblingIdB",
        as: "isASiblingForOne",
      });
    }
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
      siblingIdA: DataTypes.INTEGER,
      siblingIdB: DataTypes.INTEGER,
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
