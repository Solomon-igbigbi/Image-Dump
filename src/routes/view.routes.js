const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")
const isLoggedIn = require('../middlewares/verifyUserToken');

router.get("/", isLoggedIn, mainController.homePage);

module.exports = router;