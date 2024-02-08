// Importar el framework Express
const express = require('express');
// Crear una instancia de un router de Express
const router = express.Router();
//Importar controladores
const RepositorieController = require('../controller/RepositorieController.js');

router.get('/repositories', RepositorieController.fetchPopularRepoGoogle);


// Exportar el router para que pueda ser utilizado en la aplicación principal
module.exports = router;