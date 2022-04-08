const Pet = require("../models/Pet");
const getUserByToken = require("../helpers/GetUserByToken");
const getToken = require("../helpers/GetToken");
const ObjectId = require("mongoose").Types.ObjectId;

class EditPetByIdController {
  static async handle(req, res) {
    const { id } = req.params;
    const { name, age, weight, color, available } = req.body;

    const images = req.files;

    const updatedData = {};

    if (!ObjectId.isValid(id)) {
      return res.status(422).json({ message: "ID Invalid" });
    }

    // check if pet exists
    const pet = await Pet.findById(id);

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // check if logged in user registered the pet
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (pet.user._id.toString() !== user._id.toString()) {
      return res
        .status(422)
        .json({ message: "There was a problem processing your request" });
    }

    // validations
    if (!name) {
      return res.status(422).json({ message: "Name is required" });
    } else {
      updatedData.name = name;
    }

    if (!age) {
      return res.status(422).json({ message: "Age is required" });
    } else {
      updatedData.age = age;
    }

    if (!weight) {
      return res.status(422).json({ message: "Weight is required" });
    } else {
      updatedData.weight = weight;
    }

    if (!color) {
      return res.status(422).json({ message: "Color is required" });
    } else {
      updatedData.color = color;
    }

    if (!images) {
      return res.status(422).json({ message: "Image is required" });
    } else {
      updatedData.images = [];
      images.map((image) => {
        updatedData.images.push(image.filename);
      });
    }

    await Pet.findByIdAndUpdate(id, updatedData);

    return res.status(200).json({ message: "Pet update successfully" });
  }
}

module.exports = EditPetByIdController;
