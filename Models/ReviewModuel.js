import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    bookingId: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    review: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
    productName: String,
    order: Number,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Reviews", UserSchema);

export default UserModel;
