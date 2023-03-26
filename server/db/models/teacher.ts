import { DataTypes, Model, Sequelize } from "sequelize";
import { ITeacher } from "../../typings/models";

const TeacherModel = (sequelize: Sequelize) => {
  class Teacher extends Model<ITeacher> implements ITeacher {
    declare id: string;
    declare name: string;
    declare age: number;
    declare gender: string;
    declare picture: string;
    declare description: string[];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Teacher.hasOne(models.Room, {
        foreignKey: "teacherId",
      });

      // Teacher.hasMany(models.Student, {
      //   foreignKey: "teacherId",
      // });
    }
  }

  Teacher.init(
    {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      picture: DataTypes.STRING,
      description: DataTypes.ARRAY(DataTypes.STRING),
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
