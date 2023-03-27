import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const associateStudentRoomMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.addColumn("Students", "roomId", {
        type: DataTypes.INTEGER,
        references: {
          model: "Rooms",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    });
  },

  async down(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.removeColumn("Students", "roomId");
    });
  },
};

export default associateStudentRoomMigration;
