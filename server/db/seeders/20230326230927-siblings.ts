import { QueryInterface } from "sequelize";

const siblingsSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Siblings",
      [
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 1,
          siblingIdB: 6,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 6,
          siblingIdB: 1,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 2,
          siblingIdB: 7,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 7,
          siblingIdB: 2,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 3,
          siblingIdB: 4,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 4,
          siblingIdB: 3,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 22,
          siblingIdB: 33,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 22,
          siblingIdB: 42,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 33,
          siblingIdB: 22,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 33,
          siblingIdB: 42,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 42,
          siblingIdB: 22,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 42,
          siblingIdB: 33,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 29,
          siblingIdB: 30,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 30,
          siblingIdB: 29,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 44,
          siblingIdB: 45,
        },
        {
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 45,
          siblingIdB: 44,
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Siblings", {});
  },
};

export default siblingsSeed;
