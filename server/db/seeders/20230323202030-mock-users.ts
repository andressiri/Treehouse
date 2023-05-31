import { QueryInterface } from "sequelize";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";
import {
  REGULAR_USER_ROLE,
  ADMIN_ROLE,
  SUPER_ADMIN_ROLE,
} from "../../config/constants";

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
          picture: null,
          email: "super@admin.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: SUPER_ADMIN_ROLE,
        },
        {
          id: uuid(),
          firstName: "Page",
          lastName: "Manager",
          picture: null,
          email: "admin@mail.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: ADMIN_ROLE,
        },
        {
          id: uuid(),
          firstName: "Fake",
          lastName: "User",
          picture: null,
          email: "fakeuser@mail.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: REGULAR_USER_ROLE,
        },
        {
          id: uuid(),
          firstName: "Test",
          lastName: "User",
          picture: null,
          email: "user@test.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: REGULAR_USER_ROLE,
        },
        {
          id: uuid(),
          firstName: "Not",
          lastName: "Verified",
          picture: null,
          email: "notverified@mail.com",
          password: hashedPassword,
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: REGULAR_USER_ROLE,
        },
        {
          id: uuid(),
          firstName: "Lack",
          lastName: "Verification",
          picture: null,
          email: "notverified@test.com",
          password: hashedPassword,
          verified: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: REGULAR_USER_ROLE,
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
