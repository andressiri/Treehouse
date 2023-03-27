import { QueryInterface } from "sequelize";

const siblingsSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Siblings",
      [
        {
          id: 1,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 1,
          siblingIdB: 6,
        },
        {
          id: 2,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 6,
          siblingIdB: 1,
        },
        {
          id: 3,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 2,
          siblingIdB: 7,
        },
        {
          id: 4,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 7,
          siblingIdB: 2,
        },
        {
          id: 5,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 3,
          siblingIdB: 4,
        },
        {
          id: 6,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 4,
          siblingIdB: 3,
        },
        {
          id: 7,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 22,
          siblingIdB: 33,
        },
        {
          id: 8,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 22,
          siblingIdB: 42,
        },
        {
          id: 9,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 33,
          siblingIdB: 22,
        },
        {
          id: 10,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 33,
          siblingIdB: 42,
        },
        {
          id: 11,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 42,
          siblingIdB: 22,
        },
        {
          id: 12,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 42,
          siblingIdB: 33,
        },
        {
          id: 13,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 29,
          siblingIdB: 30,
        },
        {
          id: 14,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 30,
          siblingIdB: 29,
        },
        {
          id: 15,
          discount: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          siblingIdA: 44,
          siblingIdB: 45,
        },
        {
          id: 16,
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
