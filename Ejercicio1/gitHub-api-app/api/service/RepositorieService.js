//Importar la bibioteca axios para realizar solicitudes HTTP
const axios = require('axios');

//Función asincróna que permite obtener los 10 repositorios más populares de Google
const fetchPopularRepoGoogle = async () => {
    let repositories = [];
    //Url de la API de GitHub para obtener los repositorios de google más populares
   // Para más detalles, consultar la documentación oficial de GitHub:
    //https://docs.github.com/es/rest/search/search?apiVersion=2022-11-28#search-users 
    const URL = 'https://api.github.com/search/repositories?q=user:google&sort=stargazers_count&per_page=10&order=desc';

    //Realizar la solicitud http a traves del metodo get a la Api 
    const response = await axios.get(URL);
    const repos = response.data.items;
    if(!repos) throw new Error('Hubo un error al obtener los repositorios');

    repos.forEach((repo, index) => {
        repositories.push({
            index: (index+1),
            name: repo.name,
            stars: repo.stargazers_count
        });
    });
    const res = { msj: 'Popular repositories', repos: repositories };
    return res;
  };


  //Exportación de funciones para que pueda ser utilizada
  module.exports = {
    fetchPopularRepoGoogle
  }