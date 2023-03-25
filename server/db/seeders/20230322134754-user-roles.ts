import { QueryInterface } from "sequelize";

const rolesSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: 1,
          name: "Regular user",
          description: "User of the application",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Admin",
          description: "Application manager",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "SuperAdmin",
          description: "Application owner",
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
