import express from "express";
import {
  createBooking,
  getBooking,
  userBooking,
} from "../Controllers/BookingController.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// Insert a booking
router.put("/", verifyJWT, createBooking);

// get all booking
router.get("/", verifyJWT, verifyAdmin, userBooking);

// get a booking by id
router.get("/:id", verifyJWT, getBooking);

export default router;
