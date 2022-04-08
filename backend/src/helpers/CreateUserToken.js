const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    auth.jwt.secret,
    {
      expiresIn: "1d",
    }
  );

  return res
    .status(200)
    .json({ message: "You are authenticated", token, user_id: user._id });
};

module.exports = createUserToken;
