import express from "express";
import {
  bookingAfterPayment,
  cancelBooking,
  createBooking,
  GetAllBooking,
  getBooking,
  shipping,
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

// product shipped
router.patch("/shipping/:id", verifyJWT, verifyAdmin, shipping);

// CANCEL Booking
router.put("/:id", verifyJWT, cancelBooking);

export default router;
