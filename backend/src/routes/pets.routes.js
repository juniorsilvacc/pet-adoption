const router = require("express").Router();

const CreatePetController = require("../controllers/CreatePetController");
const GetAllPetsController = require("../controllers/GetAllPetsController");
const GetAllPetsUserController = require("../controllers/GetAllPetsUserController");

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
router.get("/mypets", ensureAutenticated, GetAllPetsUserController.handle);

module.exports = router;
