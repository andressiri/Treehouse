import { DataTypes, Model, Sequelize } from "sequelize";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified?: boolean;
  // roleID: number;
}

const model = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class User extends Model<IUser> implements IUser {
    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    verified!: boolean;
    // roleID!: number;

    // eslint-disable-next-line
    static associate(models: any) {
      //
    }
  }

  User.init(
    {
      id: {
        type: dataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4,
      },
      firstName: dataTypes.STRING,
      lastName: dataTypes.STRING,
      email: dataTypes.STRING,
      password: dataTypes.STRING,
      verified: dataTypes.BOOLEAN,
      // roleID: dataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

export default model;
