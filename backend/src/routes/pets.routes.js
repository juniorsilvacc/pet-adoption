const router = require("express").Router();

const CreatePetController = require("../controllers/CreatePetController");
const GetAllPetsController = require("../controllers/GetAllPetsController");
const GetAllPetsUserController = require("../controllers/GetAllPetsUserController");
const GetAllUserAdoptionsController = require("../controllers/GetAllUserAdoptionsController");
const GetPetByIdController = require("../controllers/GetPetByIdController");
const DeletePetByIdController = require("../controllers/DeletePetByIdController");

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

router.get(
  "/myadoptions",
  ensureAutenticated,
  GetAllUserAdoptionsController.handle
);

router.get("/:id", GetPetByIdController.handle);

router.delete("/:id", ensureAutenticated, DeletePetByIdController.handle);

module.exports = router;
