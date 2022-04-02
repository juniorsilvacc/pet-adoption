const router = require("express").Router();

const CreateUserController = require("../controllers/CreateUserController");
const AutenticatedUserController = require("../controllers/AutenticatedUserController");
const CheckUserController = require("../controllers/CheckUserController");
const GetUserByIdController = require("../controllers/GetUserByIdController");

router.post("/signup", CreateUserController.handle);
router.post("/signin", AutenticatedUserController.handle);
router.get("/checkuser", CheckUserController.handle);
router.get("/:id", GetUserByIdController.handle);

module.exports = router;
