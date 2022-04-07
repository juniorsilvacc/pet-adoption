const Pet = require("../models/Pet");
const ObjectId = require("mongoose").Types.ObjectId;

class GetPetByIdController {
  static async handle(req, res) {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(422).json({ message: "ID Invalid" });
    }

    const pets = await Pet.findById(id);

    if (!pets) {
      return res.status(404).json({ message: "Pet not found" });
    }

    return res.status(200).json({ pets });
  }
}

module.exports = GetPetByIdController;
