import express from "express";
import {
  createProduct,
  deleteProduct,
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

// delete product
router.delete("/:id", verifyJWT, verifyAdmin, deleteProduct);

export default router;
