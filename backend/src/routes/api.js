const express = require("express");
const router = express.Router();
const getUserController = require("../controller/userController")
const { checkAuth } = require("../middlewares/auth");

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener una lista de usuarios
 *     parameters:
 *        - in: query
 *          name: auth
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */
router.get("/user", checkAuth, getUserController)

module.exports = router;