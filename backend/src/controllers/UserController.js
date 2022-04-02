const bcrypt = require("bcrypt");

const User = require("../models/User");

const createUserToken = require("../helpers/CreateUserToken");

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, password, confirmpassword, phone } = req.body;

    // validations
    if (!name) {
      res.status(422).json({ message: "Name is required" });
      return;
    }

    if (!email) {
      res.status(422).json({ message: "E-mail is required" });
      return;
    }

    if (!phone) {
      res.status(422).json({ message: "Phone is required" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "Password is required" });
      return;
    }

    if (!confirmpassword) {
      res.status(422).json({ message: "Password confirmation is required" });
      return;
    }

    if (password != confirmpassword) {
      res.status(422).json({ message: "Password and confirmation must match" });
      return;
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(422).json({ message: "Please use another email" });
      return;
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
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
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
};
