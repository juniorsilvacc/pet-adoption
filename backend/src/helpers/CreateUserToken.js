const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    "asOAMSDISA#2@sdjass$%$!dJSD829sd"
  );

  res
    .status(200)
    .json({ message: "You are authenticated", token, user_id: user._id });
};

module.exports = createUserToken;
