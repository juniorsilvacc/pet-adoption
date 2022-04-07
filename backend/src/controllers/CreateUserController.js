const bcrypt = require("bcrypt");

const User = require("../models/User");

const createUserToken = require("../helpers/CreateUserToken");

class CreateUserController {
  static async handle(req, res) {
    const { name, email, password, confirmpassword, phone } = req.body;

    // validations
    if (!name) {
      return res.status(422).json({ message: "Name is required" });
    }

    if (!email) {
      return res.status(422).json({ message: "E-mail is required" });
    }

    if (!phone) {
      return res.status(422).json({ message: "Phone is required" });
    }

    if (!password) {
      return res.status(422).json({ message: "Password is required" });
    }

    if (password.length < 6) {
      return res.status(422).json({ message: "Minimum 6 characters" });
    }

    if (!confirmpassword) {
      return res
        .status(422)
        .json({ message: "Password confirmation is required" });
    }

    if (password != confirmpassword) {
      return res
        .status(422)
        .json({ message: "Password and confirmation must match" });
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ message: "Please use another email" });
    }

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // create user
    const user = new User({
      name,
      email,
      phone,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();

      await createUserToken(newUser, req, res);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = CreateUserController;
