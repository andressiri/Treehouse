// @route /api/v1
import express from "express";
import usersRouter from "./usersRouter";
import roomsRouter from "./roomsRouter";

const router = express.Router();

router.use("/users", usersRouter);

router.use("/rooms", roomsRouter);

export default router;
