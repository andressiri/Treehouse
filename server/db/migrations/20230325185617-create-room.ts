import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const roomsMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "Rooms",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              min: 1,
            },
          },
          description: {
            type: DataTypes.STRING(5000),
          },
          image: {
            type: DataTypes.STRING(1000),
            validate: {
              isUrl: true,
            },
          },
          public: {
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
      await queryInterface.dropTable("Rooms", { transaction });
    });
  },
};

export default roomsMigration;
