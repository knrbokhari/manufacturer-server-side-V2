import express from "express";
import { giveToken } from "../Controllers/UserController.js";

const router = express.Router();

router.put("/:email", giveToken);

export default router;
