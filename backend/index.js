const express = require("express");
const routes = require("./src/routes/api");

// Crear servidor
const app = express();

// Leer contenido json dentro del body
app.use(express.json());

// Creando API
app.use("/api", routes);

const PORT = 3000;
const HOST = "localhost";

app.listen(PORT, () => {
    console.log("El servidor se ha levantado correctamente en", "http://"+HOST+":"+PORT)
})