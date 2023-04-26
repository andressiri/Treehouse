// @description Remove sibling from a student (and its other siblings if required)
// @route DELETE /api/v1/students/siblings/:id
// @access Private - Admin only
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../db/models";

const { Room, Teacher, Student, Sibling } = db;

const removeSibling = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];
  const { siblingId, removeFromOtherSiblings } = req.body;

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

  await Sibling.destroy({ where: { siblingIdA: id, siblingIdB: siblingId } });
  await Sibling.destroy({ where: { siblingIdA: siblingId, siblingIdB: id } });

  if (removeFromOtherSiblings) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    student.dataValues.hasSibling.forEach(async (studentSibling: any) => {
      await Sibling.destroy({
        where: { siblingIdA: studentSibling.id, siblingIdB: siblingId },
      });
      await Sibling.destroy({
        where: { siblingIdA: siblingId, siblingIdB: studentSibling.id },
      });
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
    .json({ messge: `${studentData.name} sibling removed`, data: studentData });
});

export default removeSibling;
