const express = require("express");
const router = express.Router();
const getUserController = require("../controller/userController")

router.get("/user", getUserController)

module.exports = router;