import { QueryInterface } from "sequelize";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync();
const hashedPassword = bcrypt.hashSync("123456", salt);

const usersSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuid(),
          firstName: "Page",
          lastName: "Owner",
          email: "super@admin.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 3,
        },
        {
          id: uuid(),
          firstName: "Page",
          lastName: "Manager",
          email: "admin@mail.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 2,
        },
        {
          id: uuid(),
          firstName: "Fake",
          lastName: "User",
          email: "fakeuser@mail.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 1,
        },
        {
          id: uuid(),
          firstName: "Test",
          lastName: "User",
          email: "user@test.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 1,
        },
        {
          id: uuid(),
          firstName: "Not",
          lastName: "Verified",
          email: "notverified@mail.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 1,
        },
        {
          id: uuid(),
          firstName: "Lack",
          lastName: "Verification",
          email: "notverified@test.com",
          password: hashedPassword,
          verified: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Users", {});
  },
};

export default usersSeed;
