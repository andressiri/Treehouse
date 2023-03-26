import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const usersMigration = {
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
            validate: {
              isEmail: true,
            },
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          verified: {
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
      await queryInterface.dropTable("Users", { transaction });
    });
  },
};

export default usersMigration;
