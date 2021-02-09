const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController")


router.get('/', (req, res) => {
    res.send('hi')
})

router.get('/register', authController.register)
router.get('/login', authController.login)
router.post('/register', authController.signUp)
router.post('/login', authController.signIn);

module.exports = router;