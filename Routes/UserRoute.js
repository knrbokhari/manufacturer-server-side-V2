import express from "express";
import {
  getAllUsers,
  getUser,
  giveToken,
  updateUser,
} from "../Controllers/UserController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// give jwt token
router.put("/:email", giveToken);

// get a User from db
router.get("/:email", getUser);

// get all user info from db
router.get("/", getAllUsers);

// update User
router.put("/userprofile/:email", verifyJWT, updateUser);

export default router;
