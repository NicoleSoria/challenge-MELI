var express = require('express');
var cors = require('cors');
var env = require('node-env-file'); // .env file
const items_routes = require('./routes/items.routes');

//Habilitar solo para pruebas locales, ya que para probar local usa las variables contenidas en .env
//env(__dirname + '/.env'); 

const port = process.env.PORT || 3000
var app = express();

app.use(express.json());
app.use(cors());
app.use('/api', items_routes);

app.listen(port, () => {
  console.log('Express server listo!!');
})
