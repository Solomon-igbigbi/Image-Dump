const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController")
const authController = require("../controllers/authController")

router.get("/", mainController.homePage);
router.get('/register', authController.register)
router.get('/login', authController.login)

router.post('/register', authController.signUp)
router.post('/login', authController.signIn);

module.exports = router;