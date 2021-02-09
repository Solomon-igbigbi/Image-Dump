const express = require("express");
const router = express.Router();

const authenticationRoute = require('./auth.routes')
const viewRoute = require('./view.routes')

router.use("/", viewRoute);
router.use('/auth', authenticationRoute);

module.exports = router;