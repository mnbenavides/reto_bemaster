
//Importa el servicio de RepositorieService
const RepositorieService = require('../service/RepositorieService.js');

// Funcion asincrona para obtener los repositorios populares de Google
const fetchPopularRepoGoogle = async (req, res) => {
    try {
      const result = await RepositorieService.fetchPopularRepoGoogle();
      return res.status(200).json({
        success: true,
        body: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        body: error.message,
      });
    }
  };

  //Exportación de funciones para que pueda ser utilizada
  module.exports = {
    fetchPopularRepoGoogle
  }