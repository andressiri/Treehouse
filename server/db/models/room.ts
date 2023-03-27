import { DataTypes, Model, Sequelize } from "sequelize";
import { IRoom } from "../../typings/models";

const RoomModel = (sequelize: Sequelize) => {
  class Room extends Model<IRoom> implements IRoom {
    declare id: number;
    declare name: string;
    declare capacity: number;
    declare description: string[];
    declare teacherId: number;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Room.belongsTo(models.Teacher, {
        foreignKey: "teacherId",
      });

      Room.hasMany(models.Student, {
        foreignKey: "roomId",
      });
    }
  }

  Room.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      description: DataTypes.ARRAY(DataTypes.STRING(1000)),
      teacherId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
      tableName: "Rooms",
    }
  );

  return Room;
};

export default RoomModel;
