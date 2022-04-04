const Pet = require("../models/Pet");

class GetPetByIdController {
  static async handle(req, res) {
    const { id } = req.params;

    const pets = await Pet.findById(id);

    res.status(200).json({ pets });
  }
}

module.exports = GetPetByIdController;
