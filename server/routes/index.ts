// @route /api/v1
import express from "express";
import {
  USERS_ROUTE,
  ROOMS_ROUTE,
  TEACHERS_ROUTE,
  STUDENTS_ROUTE,
} from "../config/constants";
import usersRouter from "./usersRouter";
import roomsRouter from "./roomsRouter";
import teachersRouter from "./teachersRouter";
import studentsRouter from "./studentsRouter";

const router = express.Router();

router.use(`/${USERS_ROUTE}`, usersRouter);

router.use(`/${ROOMS_ROUTE}`, roomsRouter);

router.use(`/${TEACHERS_ROUTE}`, teachersRouter);

router.use(`/${STUDENTS_ROUTE}`, studentsRouter);

export default router;
