const axios = require('axios')

/**
 * 
 * @param {*} url de api externa
 * @returns resultado de respuesta HTTP
 * Aca utilizo axios, la cual permite el manejo de peticiones HTTP
 */
async function getData(url) {
  let response = await axios.get(url)
  return response.data
}

module.exports = {
  getData
}