const { getData } = require("../helpers/api.helper");
const { mapperItems, mapperCategories, mapperItem } = require("../mappers/items.mapper");
const AuthorResponse = require("../response/author.response");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Método que se encarga de obtener los productos, teniendo en cuenta el texto recibido en la query
 */
const getItems = async (req, res) => {
  let query = req.query.q;
  let data = null;
  let items = [];
  let categories = [];
  let url = `${process.env.API_SEARCH}?q=${query}`;

  // Uso de api.helper para realizar la petición HTTP
  await getData(url).then((result) => {
    data = result;
  })

  // Mapper para obtener los datos de los items recibidos en la consulta en el objeto que necesita el front
  await mapperItems(data.results).then((resp) => {
    items = resp;
  })

  // Busco en los filtros el 'category', que correspondo a las categorias (no siempre existe el dato)
  // luego hago uso del mapper para obtener los datos que se necesita devolver en el reponse
  let filters = data.filters.find(x => x.id == 'category');
  if (filters) {
    await mapperCategories(filters.values[0]).then((resp) => {
      categories = resp;
    })
  }

  let author = new AuthorResponse('Tamara', 'Soria');

  res.status(200).json({
    author: author,
    items: items,
    categories: categories
  })
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Método que se encarga de obtener un solo producto, teniendo en cuenta el id recibido en los params de la ruta
 */
const getItem = async (req, res) => {
  let id = req.params['id'];
  let urlItem = `${process.env.API_ITEM}/${id}`;
  let urlDescription = `${process.env.API_ITEM}/${id}/description`
  let data = null;
  let description = null;
  let item = null;
  let author = new AuthorResponse('Tamara', 'Soria');

  // Uso de api.helper para realizar la petición HTTP
  await getData(urlItem).then((result) => {
    data = result;
  })

  // Uso de api.helper para realizar la petición HTTP
  await getData(urlDescription).then((result) => {
    description = result.plain_text;
  })

  // Hago uso del mapper para obtener los datos necesarios para el response
  await mapperItem(data, description).then((resp) => {
    item = resp;
  })

  res.status(200).json({
    author: author,
    item: item
  })

}

module.exports = { getItems, getItem };