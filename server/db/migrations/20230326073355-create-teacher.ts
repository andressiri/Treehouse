import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const teachersMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "Teachers",
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
          age: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isIn: [
                [
                  "female",
                  "male",
                  "intersex",
                  "trans",
                  "non-conforming",
                  "personal",
                  "eunuch",
                ],
              ],
            },
          },
          picture: {
            type: DataTypes.STRING(1000),
            validate: {
              isUrl: true,
            },
          },
          description: {
            type: DataTypes.STRING(1000),
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
      await queryInterface.dropTable("Teachers", { transaction });
    });
  },
};

export default teachersMigration;
