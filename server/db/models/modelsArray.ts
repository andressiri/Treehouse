import User from "./user";
import Role from "./role";
import Room from "./room";
import Teacher from "./teacher";
import Student from "./student";

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
];

export default modelsArray;
