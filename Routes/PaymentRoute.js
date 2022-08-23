import express from "express";
import { paymentSystem } from "../Controllers/paymentController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router.post("/create-payment-intent", verifyJWT, paymentSystem);

export default router;
