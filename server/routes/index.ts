// @route /api/v1
import express from "express";
import {
  usersRoute,
  roomsRoute,
  teachersRoute,
  studentsRoute,
} from "../config/constants";
import usersRouter from "./usersRouter";
import roomsRouter from "./roomsRouter";
import teachersRouter from "./teachersRouter";
import studentsRouter from "./studentsRouter";

const router = express.Router();

router.use(`/${usersRoute}`, usersRouter);

router.use(`/${roomsRoute}`, roomsRouter);

router.use(`/${teachersRoute}`, teachersRouter);

router.use(`/${studentsRoute}`, studentsRouter);

export default router;
