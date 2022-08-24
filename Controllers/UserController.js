import UserModel from "../Models/UserModule.js";
import jwt from "jsonwebtoken";

// give jwt token to user
export const giveToken = async (req, res) => {
  const email = req.params.email;
  const userData = req.body;

  // check Email id
  const checkEmail = await UserModel.findOne({ email: email });
  let user;

  if (!checkEmail) {
    user = new UserModel(req.body);
    const result = await user.save();
  } else {
    user = checkEmail;
    // await UserModel.findOneAndUpdate({ email: email }, req.body, {
    //   new: true,
    // });
  }

  console.log(user);

  // jwt token
  const token = jwt.sign({ email: userData.email }, process.env.JWTKEY, {
    expiresIn: "1d",
  });

  res.status(200).json({ user, token });
};

// get a User from db
export const getUser = async (req, res) => {
  const email = req.params.email;

  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all user info from db
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a user
export const updateUser = async (req, res) => {
  const email = req.params.email;
  const { role } = req.body;
  const usereMail = req.user;

  if (email === usereMail || role === true) {
    try {
      const user = await UserModel.findOneAndUpdate(
        { email: email },
        req.body,
        {
          new: true,
        }
      );

      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWTKEY,
        { expiresIn: "1d" }
      );
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

// chack admin
export const getAdmin = async (req, res) => {
  const email = req.params.email;
  const user = await UserModel.findOne({ email: email });
  const isAdmin = user?.role === true;
  res.send({ admin: isAdmin });
};

// make admin
export const makeAdmin = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await UserModel.updateOne(
      { email: email },
      {
        $set: { role: true },
      }
    );
    res.status(200).send(result);
  } catch (err) {
    res.status(500).json(error);
  }
};
