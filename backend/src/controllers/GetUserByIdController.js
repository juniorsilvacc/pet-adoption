const User = require("../models/User");

class GetUserByIdController {
  static async handle(req, res) {
    const id = req.params.id;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  }
}

module.exports = GetUserByIdController;
