require("dotenv").config();
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger.js');

const routes = require("./src/routes/api");
const subjectRoutes = require("./src/routes/subject.js");

// Crear servidor
const app = express();

// Leer contenido json dentro del body
app.use(express.json());

// Creando API
app.use("/api", routes);
app.use("/api/subjects", subjectRoutes);

// Ruta Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;
const HOST = "localhost";

app.listen(PORT, () => {
    console.log("El servidor se ha levantado correctamente en", "http://"+HOST+":"+PORT)
})