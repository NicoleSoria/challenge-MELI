const { getData } = require("../helpers/api.helper");
const { mapperItems, mapperCategories, mapperItem } = require("../mappers/items.mapper");
const AuthorResponse = require("../response/author.response");

const getItems = async (req, res) => {
  let query = req.query.q;
  let data = null;
  let items = [];
  let categories = [];
  let url = `${process.env.API_SEARCH}?q=${query}`;

  await getData(url).then((result) => {
    data = result;
  })

  await mapperItems(data.results).then((resp) => {
    items = resp;
  })

  let filters = data.filters.find(x => x.id == 'category');
  if(filters) {
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

const getItem = async (req, res) => {
  let id = req.params['id'];
  let urlItem = `${process.env.API_ITEM}/${id}`;
  let urlDescription = `${process.env.API_ITEM}/${id}/description`
  let data = null;
  let description = null;
  let item = null;
  let author = new AuthorResponse('Tamara', 'Soria');

  await getData(urlItem).then((result) => {
    data = result;
  })

  await getData(urlDescription).then((result) => {
    description = result.plain_text;
  })
  
  await mapperItem(data, description).then((resp) => {
    item = resp;
  })

  res.status(200).json({
    author: author,
    item: item
  })

}

module.exports = { getItems, getItem };