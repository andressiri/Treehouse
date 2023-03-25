import { DataTypes, Model, Sequelize } from "sequelize";
import Role from "./role";
import { IUser } from "../../typings/models";

const UserModel = (sequelize: Sequelize) => {
  class User extends Model<IUser> implements IUser {
    declare id: string;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare password: string;
    declare verified: boolean;
    declare RoleId: number;

    static associate() {
      User.belongsTo(Role(sequelize));
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
      RoleId: DataTypes.INTEGER,
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
