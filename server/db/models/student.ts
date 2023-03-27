import { DataTypes, Model, Sequelize } from "sequelize";
import { IStudent } from "../../typings/models";

const StudentModel = (sequelize: Sequelize) => {
  class Student extends Model<IStudent> implements IStudent {
    declare id: number;
    declare name: string;
    declare age: number;
    declare gender:
      | "female"
      | "male"
      | "intersex"
      | "trans"
      | "non-conforming"
      | "personal"
      | "eunuch";

    declare picture: string;
    declare description: string;
    declare roomId: number;
    declare teacherId: number;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Student.belongsTo(models.Room, {
        foreignKey: "roomId",
      });

      Student.belongsTo(models.Teacher, {
        foreignKey: "teacherId",
      });

      Student.belongsToMany(models.User, {
        through: models.Sibling,
        foreignKey: "siblingIdA",
        as: "hasSibling",
      });

      Student.belongsToMany(models.User, {
        through: models.Sibling,
        foreignKey: "siblingIdB",
        as: "isSibling",
      });

      Student.hasMany(models.Sibling, {
        foreignKey: "siblingIdA",
        as: "hasManySiblings",
      });

      Student.hasMany(models.Sibling, {
        foreignKey: "siblingIdB",
        as: "isSiblingForMany",
      });
    }
  }

  Student.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      picture: DataTypes.STRING(1000),
      description: DataTypes.STRING(1000),
      roomId: DataTypes.INTEGER,
      teacherId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "Students",
    }
  );

  return Student;
};

export default StudentModel;
