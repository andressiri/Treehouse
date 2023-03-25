import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const associateUserRoleMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.addColumn("Users", "RoleId", {
        type: DataTypes.INTEGER,
        references: {
          model: "Roles",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    });
  },

  async down(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.removeColumn("Users", "RoleId");
    });
  },
};

export default associateUserRoleMigration;
