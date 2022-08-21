import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: Boolean,
      default: false,
    },
    photo: String,
    gender: String,
    education: String,
    location: String,
    phone: String,
    LinkedIn: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
