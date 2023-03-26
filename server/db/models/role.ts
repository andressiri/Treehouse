import { DataTypes, Model, Sequelize } from "sequelize";
import { IRole } from "../../typings/models";

const RoleModel = (sequelize: Sequelize) => {
  class Role extends Model<IRole> implements IRole {
    declare id: string;
    declare name: string;
    declare description: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Role.hasMany(models.User, {
        foreignKey: "roleId",
      });
    }
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
