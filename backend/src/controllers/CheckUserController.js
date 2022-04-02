const jwt = require("jsonwebtoken");
const auth = require("../config/auth");
const User = require("../models/User");
const getToken = require("../helpers/GetToken");

module.exports = class CheckUserController {
  static async handle(req, res) {
    let currentUser;

    if (req.headers.authorization) {
      const token = getToken(req);
      const decoded = jwt.verify(token, auth.jwt.secret);

      currentUser = await User.findById(decoded.id);

      currentUser.password = undefined;
    } else {
      currentUser = null;
    }

    res.status(200).json(currentUser);
  }
};
