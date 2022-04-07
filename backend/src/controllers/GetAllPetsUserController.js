const Pet = require("../models/Pet");
const User = require("../models/User");

class GetAllPetsUserController {
  static async handle(req, res) {
    // get user
    const { id } = req.user;
    const user = await User.findById(id);

    // filter
    const pets = await Pet.find({ "user._id": user._id }).sort("-createdAt");

    return res.status(200).json({ pets });
  }
}

module.exports = GetAllPetsUserController;
