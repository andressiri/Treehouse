import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const associateStudentTeacherMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.addColumn("Students", "teacherId", {
        type: DataTypes.INTEGER,
        references: {
          model: "Teachers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    });
  },

  async down(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.removeColumn("Students", "teacherId");
    });
  },
};

export default associateStudentTeacherMigration;
