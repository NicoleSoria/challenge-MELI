const axios = require('axios')

async function getData(url) {
  let response = await axios.get(url)
  return response.data
}

module.exports = {
    getData
}