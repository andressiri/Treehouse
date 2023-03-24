import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

export const migration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "Users",
        {
          id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUID,
          },
          firstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          verified: {
            type: DataTypes.BOOLEAN,
          },
          // roleID: {
          //   type: DataTypes.INTEGER,
          //   allowNull: false,
          // },
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
      await queryInterface.dropTable("Users", { transaction });
    });
  },
};
