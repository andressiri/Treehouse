// @route /api/v1
import express from "express";
import usersRouter from "./usersRouter";

const router = express.Router();

router.use("/users", usersRouter);

export default router;
