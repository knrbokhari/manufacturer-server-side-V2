import express from "express";
import { createProduct } from "../Controllers/ProductCollection.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// get all products
router.post("/", verifyJWT, verifyAdmin, createProduct);

export default router;
