// @route api/v1/users
import express from "express";
import { getUsers } from "../controllers/users";
import { authenticateAdmin, authenticateUser } from "../middlewares";

const usersRouter = express.Router();

usersRouter.get("/", authenticateUser, authenticateAdmin, getUsers);

export default usersRouter;
