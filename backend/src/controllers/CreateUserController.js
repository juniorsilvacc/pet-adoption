const bcrypt = require("bcrypt");

const User = require("../models/User");

const createUserToken = require("../helpers/CreateUserToken");

class CreateUserController {
  static async handle(req, res) {
    const { name, email, password, confirmpassword, phone } = req.body;

    // validations
    if (!name) {
      return res.status(422).json({ message: "O nome é obrigatório" });
    }

    if (!email) {
      return res.status(422).json({ message: "E-mail é obrigatório" });
    }

    if (!phone) {
      return res.status(422).json({ message: "Telefone é obrigatório" });
    }

    if (!password) {
      return res.status(422).json({ message: "A senha é obrigatória" });
    }

    if (password.length < 6) {
      return res.status(422).json({ message: "Mínimo 6 caracteres" });
    }

    if (!confirmpassword) {
      return res
        .status(422)
        .json({ message: "A confirmação da senha é necessária" });
    }

    if (password != confirmpassword) {
      return res
        .status(422)
        .json({ message: "A senha e a confirmação devem corresponder" });
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ message: "Por favor, use outro e-mail" });
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
