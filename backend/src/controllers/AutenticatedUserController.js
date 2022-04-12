const bcrypt = require("bcrypt");

const User = require("../models/User");

const createUserToken = require("../helpers/CreateUserToken");

class AutenticatedUserController {
  static async handle(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ message: "E-mail é obrigatório" });
    }

    if (!password) {
      return res.status(422).json({ message: "A senha é obrigatória" });
    }

    // check if user exists
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ message: "O usuário não existe" });
    }

    // check if password match with password
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(422).json({ message: "E-mail e/ou senha inválidos" });
    }

    await createUserToken(user, req, res);
  }
}

module.exports = AutenticatedUserController;
