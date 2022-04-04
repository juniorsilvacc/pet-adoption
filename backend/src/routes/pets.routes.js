const router = require("express").Router();

const CreatePetController = require("../controllers/CreatePetController");

// middlewares
const ensureAutenticated = require("../middlewares/ensureAutenticated");

router.post("/create", ensureAutenticated, CreatePetController.handle);

module.exports = router;
