import { QueryInterface } from "sequelize";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync();
const hashedPassword = bcrypt.hashSync("123456", salt);

export const seed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuid(),
          firstName: "Page",
          lastName: "Administrator",
          email: "admin@test.com",
          password: hashedPassword,
          verified: true,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          firstName: "Page",
          lastName: "Manager",
          email: "admin@mail.com",
          password: hashedPassword,
          verified: true,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          firstName: "Fake",
          lastName: "User",
          email: "fakeuser@mail.com",
          password: hashedPassword,
          verified: true,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          firstName: "Test",
          lastName: "User",
          email: "user@test.com",
          password: hashedPassword,
          verified: true,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          firstName: "Not",
          lastName: "Verified",
          email: "notverified@mail.com",
          password: hashedPassword,
          verified: true,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          firstName: "Lack",
          lastName: "Verification",
          email: "notverified@test.com",
          password: hashedPassword,
          verified: null,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Users", {});
  },
};
