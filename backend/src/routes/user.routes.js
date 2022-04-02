const router = require("express").Router();

const CreateUserController = require("../controllers/CreateUserController");
const AutenticatedUserController = require("../controllers/AutenticatedUserController");
const CheckUserController = require("../controllers/CheckUserController");

router.post("/signup", CreateUserController.handle);
router.post("/signin", AutenticatedUserController.handle);
router.get("/checkuser", CheckUserController.handle);

module.exports = router;
