const axios = require('axios')

/**
 * 
 * @param {*} url de api externa
 * @returns resultado de respuesta http
 */
async function getData(url) {
  let response = await axios.get(url)
  return response.data
}

module.exports = {
  getData
}