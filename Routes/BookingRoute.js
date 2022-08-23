import express from "express";
import {
  bookingAfterPayment,
  createBooking,
  GetAllBooking,
  getBooking,
  userBooking,
} from "../Controllers/BookingController.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

// Insert a booking
router.put("/", verifyJWT, createBooking);

// get a booking by id
router.get("/:id", verifyJWT, getBooking);

// get all booking
router.get("/", verifyJWT, verifyAdmin, GetAllBooking);

// get all booking for singel user
router.get("/userbooking/:email", verifyJWT, userBooking);

// booking after payment
router.patch("/:id", verifyJWT, bookingAfterPayment);

export default router;
