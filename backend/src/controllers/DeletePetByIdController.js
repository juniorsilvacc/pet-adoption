const Pet = require("../models/Pet");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");
const ObjectId = require("mongoose").Types.ObjectId;

class DeletePetByIdController {
  static async handle(req, res) {
    const { id } = req.params;

    // check id valid
    if (!ObjectId.isValid(id)) {
      return res.status(422).json({ message: "ID inválido" });
    }

    const pet = await Pet.findById(id);

    // check id found
    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    // check if logged in user registered the pet
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (pet.user._id.toString() !== user._id.toString()) {
      return res.status(422).json({ message: "Houve um problema" });
    }

    await Pet.findByIdAndRemove(id);

    return res.status(200).json({ message: "Pet removido com sucesso!" });
  }
}

module.exports = DeletePetByIdController;
