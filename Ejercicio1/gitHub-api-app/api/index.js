// Importar el framework Express
const express = require('express');
// Importa las rutas definidas en el archivo routes/routes.js
const routes = require('./routes/routes');
// Importar las rutas definidas en el archivo routes/routes.js
const app = express();
//Establecer el valor del puerto que escuche por el 3000
const PORT = 3000;

app.use(express.json({ limit: '50mb' })); // Permite JSON con un límite de 50MB
app.use(express.urlencoded({ extended: true })); // Permite formularios URL-encoded


app.use('/', routes); // Usar las rutas definidas en la rapiz de la aplicación

// Inicia el servidor por el puerto especificado
app.listen(PORT, function() {
  console.log('Servidor API en: ' + PORT);
});
