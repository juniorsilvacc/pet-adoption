const User = require("../models/User");

class GetUserByIdController {
  static async handle(req, res) {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).json({ user });
  }
}

module.exports = GetUserByIdController;
