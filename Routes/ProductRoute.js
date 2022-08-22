import express from "express";
import {
  createProduct,
  getAllProduct,
  getProduct,
} from "../Controllers/ProductCollection.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// add product
router.post("/", verifyJWT, verifyAdmin, createProduct);

// get a product
router.get("/:id", getProduct);

// get all products
router.get("/", verifyJWT, getAllProduct);

export default router;
