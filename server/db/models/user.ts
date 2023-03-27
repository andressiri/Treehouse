import { DataTypes, Model, Sequelize } from "sequelize";
import { IUser } from "../../typings/models";

const UserModel = (sequelize: Sequelize) => {
  class User extends Model<IUser> implements IUser {
    declare id: string;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare password: string;
    declare verified: boolean;
    declare roleId: number;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      User.belongsTo(models.Role, {
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
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );

  return User;
};

export default UserModel;
