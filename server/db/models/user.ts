import { DataTypes, Model, Sequelize } from "sequelize";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified?: boolean;
  roleID: number;
}

const model = (sequelize: Sequelize) => {
  class User extends Model<IUser> implements IUser {
    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    verified!: boolean;
    roleID!: number;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      User.belongsTo(models.Role, {
        as: "role",
        foreignKey: "roleId",
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
      roleID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

export default model;
