require("dotenv").config();
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger.js');

const routes = require("./src/routes/api");

// Crear servidor
const app = express();

// Leer contenido json dentro del body
app.use(express.json());

// Creando API
app.use("/api", routes);

// Ruta Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;
const HOST = "localhost";

app.listen(PORT, () => {
    console.log("El servidor se ha levantado correctamente en", "http://"+HOST+":"+PORT)
})