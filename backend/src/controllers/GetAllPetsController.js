const Pet = require("../models/Pet");

class GetAllPetsController {
  static async handle(req, res) {
    const pets = await Pet.find().sort("-createdAt");

    res.status(200).json({ pets });
  }
}

module.exports = GetAllPetsController;
