const Pet = require("../models/Pet");
const ObjectId = require("mongoose").Types.ObjectId;
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");

class ConcludeAdoption {
  static async handle(req, res) {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(422).json({ message: "ID inválido" });
    }

    // check if pet exists
    const pet = await Pet.findById(id);

    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    // check if logged in user registered the pet
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (pet.user._id.toString() !== user._id.toString()) {
      return res.status(422).json({ message: "Houve um problema" });
    }

    pet.available = false;

    await Pet.findByIdAndUpdate(id, pet);

    return res
      .status(200)
      .json({ message: "Parabéns, adoção concluída com sucesso!" });
  }
}

module.exports = ConcludeAdoption;
