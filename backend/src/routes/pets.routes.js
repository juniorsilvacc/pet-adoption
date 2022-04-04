const router = require("express").Router();

const CreatePetController = require("../controllers/CreatePetController");
const GetAllPetsController = require("../controllers/GetAllPetsController");

// middlewares
const ensureAutenticated = require("../middlewares/ensureAutenticated");

const { imageUpload } = require("../config/upload");

router.post(
  "/create",
  ensureAutenticated,
  imageUpload.array("images"),
  CreatePetController.handle
);

router.get("/", GetAllPetsController.handle);

module.exports = router;
