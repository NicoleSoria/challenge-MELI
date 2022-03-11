var express = require('express');
var env = require('node-env-file'); // .env file
const items_routes = require('./routes/items.routes');

env(__dirname + '/.env');

var app = express();
const PORT = process.env.PORT || '3000' 
app.use(express.json());
app.use('/api', items_routes);

app.listen(PORT, () => {
  console.log('Express server listo!!');
})
