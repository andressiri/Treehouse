import { DataTypes, Model, Sequelize } from "sequelize";
// import Teacher from "./teacher"
import { IRoom } from "../../typings/models";

const RoomModel = (sequelize: Sequelize) => {
  class Room extends Model<IRoom> implements IRoom {
    declare id: string;
    declare name: string;
    declare capacity: number;
    declare description: string;
    declare TeacherId: string;

    // static associate() {
    //   Room.hasOne(Teacher(sequelize));
    // }
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
      description: DataTypes.STRING,
      TeacherId: DataTypes.UUIDV4,
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
