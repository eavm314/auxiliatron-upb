const express = require("express");
const router = express.Router();
const { getSubjectController, getSubjectByIdController, createSubjectController, updateSubjectController, deleteSubjectController } = require("../controller/subjectController");

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: API de Gestión de Materias
 *   version: 1.0.0
 * paths:
 *   /subjects:
 *     get:
 *       summary: Obtener todas las materias
 *       responses:
 *         '200':
 *           description: OK
 *     post:
 *       summary: Crear una nueva materia
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 credits:
 *                   type: integer
 *                 professor:
 *                   type: string
 *       responses:
 *         '201':
 *           description: Materia creada exitosamente
 *   /subjects/{id}:
 *     get:
 *       summary: Obtener una materia por su ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID de la materia a obtener
 *           schema:
 *             type: integer
 *       responses:
 *         '200':
 *           description: OK
 *     put:
 *       summary: Actualizar una materia por su ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID de la materia a actualizar
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 credits:
 *                   type: integer
 *                 professor:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Materia actualizada exitosamente
 *     delete:
 *       summary: Eliminar una materia por su ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID de la materia a eliminar
 *           schema:
 *             type: integer
 *       responses:
 *         '204':
 *           description: Materia eliminada exitosamente 
 */

router.get("/", getSubjectController)
router.get("/:id", getSubjectByIdController)
router.post("/", createSubjectController)
router.put("/:id", updateSubjectController)
router.delete("/:id", deleteSubjectController)

module.exports = router;