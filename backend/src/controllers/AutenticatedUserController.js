const bcrypt = require("bcrypt");

const User = require("../models/User");

const createUserToken = require("../helpers/CreateUserToken");

class AutenticatedUserController {
  static async handle(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(422).json({ message: "E-mail is required" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "Password is required" });
      return;
    }

    // check if user exists
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(422).json({ message: "User not exists" });
      return;
    }

    // check if password match with password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(422).json({ message: "Invalid email or password" });
      return;
    }

    await createUserToken(user, req, res);
  }
}

module.exports = AutenticatedUserController;
