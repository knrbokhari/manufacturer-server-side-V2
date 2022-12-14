import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTKEY;

const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ Message: "UnAuthorized access" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      return res.status(403).send({ Message: "Forbidden access" });
    }
    req.user = decoded?.email;
    next();
  });
};

export default verifyJWT;
