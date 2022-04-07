const Pet = require("../models/Pet");
const User = require("../models/User");

class GetAllUserAdoptionsController {
  static async handle(req, res) {
    const { id } = req.user;
    const user = await User.findById(id);

    // filter
    const pets = await Pet.find({ "adopter._id": user._id }).sort("-createdAt");

    return res.status(200).json({ pets });
  }
}

module.exports = GetAllUserAdoptionsController;
