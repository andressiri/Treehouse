import { QueryInterface } from "sequelize";

const rolesSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "Regular user",
          description: "User of the application",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Admin",
          description: "Application manager",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SuperAdmin",
          description: "Application owner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Banned user",
          description: "User banned from the application",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Roles", {});
  },
};

export default rolesSeed;
