const Pet = require("../models/Pet");
const User = require("../models/User");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");

class GetAllPetsUserController {
  static async handle(req, res) {
    // get user by token
    // const token = getToken(req);
    // const user = await getUserByToken(token);
    const { id } = req.user;
    const user = await User.findById(id);

    // filter
    const pets = await Pet.find({ "user._id": user._id }).sort("-createdAt");

    res.status(200).json({ pets });
  }
}

module.exports = GetAllPetsUserController;
