const bcrypt = require("bcrypt");

const User = require("../models/User");

const createUserToken = require("../helpers/CreateUserToken");

class AutenticatedUserController {
  static async handle(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ message: "E-mail is required" });
    }

    if (!password) {
      return res.status(422).json({ message: "Password is required" });
    }

    // check if user exists
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ message: "User not exists" });
    }

    // check if password match with password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(422).json({ message: "Invalid email or password" });
    }

    await createUserToken(user, req, res);
  }
}

module.exports = AutenticatedUserController;
