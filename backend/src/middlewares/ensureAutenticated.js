const jwt = require("jsonwebtoken");
const getToken = require("../helpers/GetToken");
const auth = require("../config/auth");

const ensureAutenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "JWT token is missing" });
  }

  const token = getToken(req);

  if (!token) {
    return res.status(401).json({ message: "JWT token is missing" });
  }

  try {
    const verified = jwt.verify(token, auth.jwt.secret);
    req.user = verified;

    next();
  } catch (error) {
    return res.status(400).json({ message: "JWT token invalid" });
  }
};

module.exports = ensureAutenticated;
