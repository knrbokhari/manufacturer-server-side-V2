import express from "express";
import { createReview, getAllReview } from "../Controllers/ReviewController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// create review
router.post("/", verifyJWT, createReview);

// get all review
router.get("/", getAllReview);

export default router;
