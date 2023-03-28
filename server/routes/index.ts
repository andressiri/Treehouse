// @route /api/v1
import express from "express";
import usersRouter from "./usersRouter";
import roomsRouter from "./roomsRouter";
import teachersRouter from "./teachersRouter";

const router = express.Router();

router.use("/users", usersRouter);

router.use("/rooms", roomsRouter);

router.use("/teachers", teachersRouter);

export default router;
