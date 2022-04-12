const jwt = require("jsonwebtoken");
const auth = require("../config/auth");
const User = require("../models/User");

const GetUserByToken = async (token) => {
  if (!token) {
    return res.status(401).json({ message: "O token JWT está ausente" });
  }

  const decoded = jwt.verify(token, auth.jwt.secret);

  const user_id = decoded.id;

  const user = await User.findOne({ _id: user_id });

  return user;
};

module.exports = GetUserByToken;
