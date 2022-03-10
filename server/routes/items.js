const express = require("express");
const routes = express.Router();
const { getData } = require("../gestor/meli-api");
const { mapperItems, mapperCategories } = require("../mappers/mapper");
const AuthorResponse = require("../response/author");

routes.get('/api/items/:query', async (req, res) => {
  let query = req.params['query'];
  let data = null;
  let items = [];
  let categories = [];
  let url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

  await getData(url).then((result) => {
    data = result;
  })

  await mapperItems(data.results).then((resp) => {
    items = resp;
  })

  await mapperCategories(data.available_filters[0].values).then((resp) => {
    categories = resp;
  })

  let author = new AuthorResponse('Tamara', 'Soria');

  res.status(200).json({
    result: data,
    author: author,
    items: items,
    categories: categories
  })
});


routes.get('/api/items/:id', async (req, res) => {
  let id = req.params['id'];
  let urlItem = `https://api.mercadolibre.com/items/${id}`;
  let urlDescription = `https://api.mercadolibre.com/items/${id}/description`
  let data = null;
  let description = null;
  let items = [];
  let author = new AuthorResponse('Tamara', 'Soria');

  await getData(urlItem).then((result) => {
    data = result;
  })

  await getData(urlDescription).then((result) => {
    description = result;
  })
  
  res.status(200).json({
    result: data,
    author: author,
    items: items,
    description: description
  })

});


module.exports = routes;