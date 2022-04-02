const router = require("express").Router();

const CreateUserController = require("../controllers/CreateUserController");
const AutenticatedUserController = require("../controllers/AutenticatedUserController");

router.post("/signup", CreateUserController.handle);
router.post("/signin", AutenticatedUserController.handle);

module.exports = router;
