class EditUserController {
  static async handle(req, res) {
    res.status(200).json({ message: "Deu certo" });
    return;
  }
}

module.exports = EditUserController;
