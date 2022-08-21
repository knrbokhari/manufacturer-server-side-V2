import express from "express";
import { getAllUsers, giveToken } from "../Controllers/UserController.js";

const router = express.Router();

// give jwt token
router.put("/:email", giveToken);

// get all user info from db
router.get("/", getAllUsers);

export default router;
