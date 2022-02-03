const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.get("/signout", auth, userController.logout);

module.exports = router;
