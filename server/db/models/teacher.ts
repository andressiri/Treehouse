import { DataTypes, Model, Sequelize } from "sequelize";
import { IPerson } from "../../typings/models";

const TeacherModel = (sequelize: Sequelize) => {
  class Teacher extends Model<IPerson> implements IPerson {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Teacher.hasOne(models.Room, {
        foreignKey: "teacherId",
      });

      Teacher.hasMany(models.Student, {
        foreignKey: "teacherId",
      });
    }
  }

  Teacher.init(
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
    },
    {
      sequelize,
      modelName: "Teacher",
      tableName: "Teachers",
    }
  );

  return Teacher;
};

export default TeacherModel;
