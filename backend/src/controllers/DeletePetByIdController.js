const Pet = require("../models/Pet");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");
const ObjectId = require("mongoose").Types.ObjectId;

class DeletePetByIdController {
  static async handle(req, res) {
    const { id } = req.params;

    // check id valid
    if (!ObjectId.isValid(id)) {
      return res.status(422).json({ message: "ID Invalid" });
    }

    const pet = await Pet.findById(id);

    // check id found
    if (!pet) {
      res.status(404).json({ message: "Pet not found" });
    }

    // check if logged in user registered the pet
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (pet.user._id.toString() !== user._id.toString()) {
      res
        .status(422)
        .json({ message: "There was a problem processing your request" });
    }

    await Pet.findByIdAndRemove(id);

    res.status(200).json({ message: "Pet successfully removed" });
  }
}

module.exports = DeletePetByIdController;
