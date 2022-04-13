const User = require("../models/User");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");
const bcrypt = require("bcrypt");

class EditUserController {
  static async handle(req, res) {
    // get user by token
    const token = getToken(req);
    const user = await getUserByToken(token);

    const { name, email, phone, password, confirmpassword } = req.body;

    if (req.file) {
      user.image = req.file.filename;
    }

    // validations
    if (!name) {
      return res.status(422).json({ message: "O nome é obrigatório" });
    }

    user.name = name;

    if (!email) {
      return res.status(422).json({ message: "O e-mail é obrigatório" });
    }

    // check if user exists
    const userExists = await User.findOne({ email });

    if (user.email !== email && userExists) {
      return res.status(401).json({ message: "Usuário já existe" });
    }

    user.email = email;

    if (!phone) {
      return res.status(422).json({ message: "O telefone é obrigatório" });
    }

    user.phone = phone;

    if (password !== confirmpassword) {
      return res
        .status(422)
        .json({ message: "A senha e a confirmação devem corresponder" });
    } else if (password === confirmpassword && password !== undefined) {
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

      return res
        .status(200)
        .json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = EditUserController;
