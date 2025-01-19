import express from "express";
import register from "../controller/user.controller.js";

const userRouter = express.Router();

// Register route
userRouter.post("/register", register);

export default userRouter;
