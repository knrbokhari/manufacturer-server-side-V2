import UserModel from "../Models/UserModule.js";
import jwt from "jsonwebtoken";

// give jwt token to user
export const giveToken = async (req, res) => {
  const email = req.params.email;
  const userData = req.body;

  // check Email id
  const checkEmail = await UserModel.findOne({ email: email });
  let user;

  if (checkEmail) {
    user = await UserModel.findOneAndUpdate({ email: email }, req.body, {
      new: true,
    });
  } else {
    user = new UserModel(req.body);
  }

  const result = await user.save();
  // jwt token
  const token = jwt.sign({ email: userData.email }, process.env.JWTKEY, {
    expiresIn: "1d",
  });
  res.status(200).json({ result, token });
};
