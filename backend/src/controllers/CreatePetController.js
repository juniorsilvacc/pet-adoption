const User = require("../models/User");
const Pet = require("../models/Pet");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");

class CreatePetController {
  static async handle(req, res) {
    const { name, age, description, weight, color, images } = req.body;

    const available = true;

    // get user by token
    const token = getToken(req);
    const user = await getUserByToken(token);

    // upload images

    // validations
    if (!name) {
      res.status(422).json({ message: "Name is required" });
      return;
    }

    if (!age) {
      res.status(422).json({ message: "Age is required" });
      return;
    }

    if (!description) {
      res.status(422).json({ message: "Description is required" });
      return;
    }

    if (!weight) {
      res.status(422).json({ message: "Weight is required" });
      return;
    }

    if (!color) {
      res.status(422).json({ message: "Color is required" });
      return;
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

    try {
      const newPet = await pet.save();

      res.status(201).json({ message: "Pet created successfully", newPet });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = CreatePetController;
