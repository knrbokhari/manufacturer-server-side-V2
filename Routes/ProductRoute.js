import express from "express";
import {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../Controllers/ProductCollection.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// get a product
router.get("/:id", getProduct);

// get all products
router.get("/", getAllProduct);

// add product
router.post("/", verifyJWT, verifyAdmin, createProduct);

// update a product
router.put("/:id", verifyJWT, verifyAdmin, updateProduct);

export default router;
