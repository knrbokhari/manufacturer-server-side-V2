import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./Routes/UserRoute.js";
import ProductRoute from "./Routes/ProductRoute.js";
import BookingRoute from "./Routes/BookingRoute.js";
import PaymentRoute from "./Routes/PaymentRoute.js";

// middlewares
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// connecting to mongobd
mongoose
  .connect(
    "mongodb+srv://fuzzy_lamp:BpP9R1Wr7LNo0bfK@cluster0.4wilm.mongodb.net/ManufacturerServer?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    throw err;
  });

// routes
app.use("/user", UserRoute);
app.use("/product", ProductRoute);
app.use("/booking", BookingRoute);
app.use("/payment", PaymentRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
