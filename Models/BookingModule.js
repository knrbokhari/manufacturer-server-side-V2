import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    totalPrices: {
      type: Number,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    transactionId: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Bookings", UserSchema);

export default UserModel;
