import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const siblingsMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "Siblings",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          discount: {
            type: DataTypes.BOOLEAN,
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
        },
        {
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci",
          transaction,
        }
      );
    });
  },

  async down(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable("Siblings", { transaction });
    });
  },
};

export default siblingsMigration;
