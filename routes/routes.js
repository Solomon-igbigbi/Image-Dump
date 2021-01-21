const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController")
const authController = require("../controllers/authController")

router.get("/", mainController.homePage);
router.get('/register', authController.register)

router.post('/register', authController.signUp)

module.exports = router;