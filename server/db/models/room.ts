import { DataTypes, Model, Sequelize } from "sequelize";
import { IRoom } from "../../typings/models";

const RoomModel = (sequelize: Sequelize) => {
  class Room extends Model<IRoom> implements IRoom {
    declare id: string;
    declare name: string;
    declare capacity: number;
    declare description: string[];
    declare teacherId: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Room.belongsTo(models.Teacher, {
        foreignKey: "teacherId",
      });

      // Room.hasMany(models.Student, {
      //   sourceKey: "roomId",
      // });
    }
  }

  Room.init(
    {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      description: DataTypes.ARRAY(DataTypes.STRING),
      teacherId: DataTypes.UUIDV4,
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
