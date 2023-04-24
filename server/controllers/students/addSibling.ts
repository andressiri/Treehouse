// @description Add sibling to a student (and its other siblings if required)
// @route PUT /api/v1/students/siblings/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../db/models";

const { Room, Teacher, Student, Sibling } = db;

const addSibling = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];
  const { siblingId, addToOtherSiblings } = req.body;

  if (id === siblingId) {
    res.status(400);
    throw new Error("Id sent and sibling id must be different");
  }

  const student = await Student.findByPk(id, {
    attributes: ["id"],
    include: [
      {
        model: Student,
        as: "hasSibling",
        foreignKey: "siblingIdA",
        through: { model: Sibling },
      },
    ],
  });

  if (!student) {
    res.status(404);
    throw new Error("There is no student for that id");
  }

  const sibling = await Student.findByPk(siblingId, {
    attributes: ["id"],
  });

  if (!sibling) {
    res.status(404);
    throw new Error("There is no student for that sibling id");
  }

  await student.addHasSibling(siblingId, { discount: null });
  await student.addIsSibling(siblingId, { discount: null });

  if (addToOtherSiblings) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    student.dataValues.hasSibling.forEach(async (studentSibling: any) => {
      const temporaryStudent = await Student.findByPk(studentSibling.id, {
        attributes: ["id"],
      });

      await temporaryStudent.addHasSibling(siblingId, { discount: null });
      await temporaryStudent.addIsSibling(siblingId, { discount: null });
    });
  }

  const studentData = await Student.findByPk(id, {
    include: [
      Room,
      Teacher,
      {
        model: Student,
        as: "hasSibling",
        foreignKey: "siblingIdA",
        through: { model: Sibling },
      },
    ],
  });

  res
    .status(200)
    .json({ messge: `${studentData.name} sibling added`, studentData });
});

export default addSibling;
