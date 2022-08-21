import express from "express";
import {
  getAllUsers,
  getUser,
  giveToken,
} from "../Controllers/UserController.js";

const router = express.Router();

// give jwt token
router.put("/:email", giveToken);

// get a User from db
router.get("/:email", getUser);

// get all user info from db
router.get("/", getAllUsers);

export default router;
