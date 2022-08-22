import express from "express";
import {
  createProduct,
  getAllProduct,
} from "../Controllers/ProductCollection.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// add product
router.post("/", verifyJWT, verifyAdmin, createProduct);

// get a product

// get all products
router.get("/", getAllProduct);

export default router;
