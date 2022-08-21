import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
