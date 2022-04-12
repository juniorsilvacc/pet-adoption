const Pet = require("../models/Pet");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");
const ObjectId = require("mongoose").Types.ObjectId;

class ScheduleController {
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

    if (pet.user._id.toString() === user._id.toString()) {
      return res.status(422).json({ message: "Houve um problema" });
    }

    // check if user has already schedule a visit
    if (pet.adopter) {
      if (pet.adopter._id.equals(user._id)) {
        return res
          .status(422)
          .json({ message: "Você já agendou uma visita para esse pet" });
      }
    }

    // add user to pet
    pet.adopter = {
      _id: user._id,
      name: user.name,
      image: user.image,
    };

    await Pet.findByIdAndUpdate(id, pet);

    return res.status(200).json({
      message: `Pet adotado com sucesso. Nome: ${pet.user.name} Telefone: ${pet.user.phone} para contato.`,
    });
  }
}

module.exports = ScheduleController;
