import UserModel from "../Models/UserModule";

const verifyAdmin = async (req, res, next) => {
  const requester = req.user;
  const requesterAccount = await UserModel.findOne({
    email: requester,
  });
  if (requesterAccount.role === true) {
    next();
  } else {
    res.status(403).send({ message: "Forbidden" });
  }
};

export default verifyAdmin;
