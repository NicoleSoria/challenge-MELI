const express = require("express");
const {getItems, getItem} = require("../controllers/items.controllers");
const routes = express.Router();

routes.get('/items', getItems);


routes.get('/items/:id', getItem);


module.exports = routes;