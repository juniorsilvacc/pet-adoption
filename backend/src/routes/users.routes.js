const router = require("express").Router();

const CreateUserController = require("../controllers/CreateUserController");
const AutenticatedUserController = require("../controllers/AutenticatedUserController");
const CheckUserController = require("../controllers/CheckUserController");
const GetUserByIdController = require("../controllers/GetUserByIdController");
const EditUserController = require("../controllers/EditUserController");

// middlewares
const ensureAutenticated = require("../middlewares/ensureAutenticated");

const { imageUpload } = require("../config/upload");

router.post("/signup", CreateUserController.handle);
router.post("/signin", AutenticatedUserController.handle);
router.get("/checkuser", CheckUserController.handle);
router.get("/:id", GetUserByIdController.handle);
router.patch(
  "/edit/:id",
  ensureAutenticated,
  imageUpload.single("image"),
  EditUserController.handle
);

module.exports = router;
