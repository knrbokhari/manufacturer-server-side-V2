import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    minOrder: {
      type: Number,
      required: true,
    },
    tag: {
      type: [],
    },
    description: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Products", UserSchema);
export default UserModel;
