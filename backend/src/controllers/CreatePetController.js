const User = require("../models/User");
const Pet = require("../models/Pet");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");

class CreatePetController {
  static async handle(req, res) {
    const { name, age, description, weight, color } = req.body;

    const images = req.files;

    const available = true;

    // get user by token
    const token = getToken(req);
    const user = await getUserByToken(token);

    // validations
    if (!name) {
      return res.status(422).json({ message: "O nome é obrigatório" });
    }

    if (!age) {
      return res.status(422).json({ message: "A idade é obrigatória" });
    }

    if (!description) {
      return res.status(422).json({ message: "A descrição é obrigatória" });
    }

    if (!weight) {
      return res.status(422).json({ message: "O peso é obrigatório" });
    }

    if (!color) {
      return res.status(422).json({ message: "A cor é obrigatória" });
    }

    if (images.length === 0) {
      return res.status(422).json({ message: "A imagem é obrigatória" });
    }

    const pet = new Pet({
      name,
      age,
      description,
      weight,
      color,
      available,
      images: [],
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        phone: user.phone,
      },
    });

    // upload images
    images.map((image) => {
      pet.images.push(image.filename);
    });

    try {
      const newPet = await pet.save();

      return res
        .status(201)
        .json({ message: "Pet criado com sucesso!", newPet });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = CreatePetController;
