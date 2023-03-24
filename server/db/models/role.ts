import { DataTypes, Model, Sequelize } from "sequelize";

interface IRole {
  id: string;
  name: string;
  description: string;
}

const model = (sequelize: Sequelize) => {
  class Role extends Model<IRole> implements IRole {
    id!: string;
    name!: string;
    description!: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Role.hasMany(models.User, {
        as: "users",
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
    }
  );

  return Role;
};

export default model;
