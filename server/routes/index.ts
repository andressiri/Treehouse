// @route /api/v1
import express from "express";
import { usersRoute, roomsRoute, teachersRoute } from "../config/constants";
import usersRouter from "./usersRouter";
import roomsRouter from "./roomsRouter";
import teachersRouter from "./teachersRouter";

const router = express.Router();

router.use(`/${usersRoute}`, usersRouter);

router.use(`/${roomsRoute}`, roomsRouter);

router.use(`/${teachersRoute}`, teachersRouter);

export default router;
