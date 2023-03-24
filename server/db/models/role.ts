import { DataTypes, Model, Sequelize } from "sequelize";
import { IRole } from "../../typings/models";

const RoleModel = (sequelize: Sequelize) => {
  class Role extends Model<IRole> implements IRole {
    id!: string;
    name!: string;
    description!: string;
  }

  Role.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "Roles",
    }
  );

  return Role;
};

export default RoleModel;
