var express = require('express');
const items_routes = require('./routes/items.routes');

var app = express();
app.use(express.json());
app.use('/api', items_routes);

app.listen(3000, () => {
  console.log('Express server listo!!');
})
