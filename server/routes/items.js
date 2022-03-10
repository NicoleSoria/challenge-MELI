const express = require("express");
const routes = express.Router();
const https = require('https');

routes.get('/items/:query', (req, res) => {
  let query = req.params['query'];

  https.get(`https://api.mercadolibre.com/sites/MLA/search?q='${query}'`, (resp) => {
    console.log(resp);
  })
});

module.exports = routes;