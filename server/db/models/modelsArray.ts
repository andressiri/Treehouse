import User from "./user";
import Role from "./role";
import Room from "./room";
import Teacher from "./teacher";
import Student from "./student";
import Sibling from "./sibling";

const modelsArray = [
  {
    name: "User",
    model: User,
  },
  {
    name: "Role",
    model: Role,
  },
  {
    name: "Room",
    model: Room,
  },
  {
    name: "Teacher",
    model: Teacher,
  },
  {
    name: "Student",
    model: Student,
  },
  {
    name: "Sibling",
    model: Sibling,
  },
];

export default modelsArray;
