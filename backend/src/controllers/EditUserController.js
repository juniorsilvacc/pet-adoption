const User = require("../models/User");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");
const bcrypt = require("bcrypt");

class EditUserController {
  static async handle(req, res) {
    const id = req.params.id;

    // get user by token
    const token = getToken(req);
    const user = await getUserByToken(token);

    const { name, email, phone, password, confirmpassword } = req.body;

    let image = "";

    // validations
    if (!name) {
      res.status(422).json({ message: "Name is required" });
      return;
    }

    user.name = name;

    if (!email) {
      res.status(422).json({ message: "E-mail is required" });
      return;
    }

    // check if user exists
    const userExists = await User.findOne({ email });

    if (user.email !== email && userExists) {
      return res.status(401).json({ message: "User already exists" });
    }

    user.email = email;

    if (!phone) {
      res.status(422).json({ message: "Phone is required" });
      return;
    }

    user.phone = phone;

    if (password !== confirmpassword) {
      return res
        .status(422)
        .json({ message: "Password and confirmation must match" });
    } else if (password === confirmpassword && password !== null) {
      // create password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      user.password = passwordHash;
    }

    try {
      // return user update data
      await User.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true }
      );

      return res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = EditUserController;
