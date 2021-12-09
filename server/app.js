const express = require('express');

const app = express();
const cors = require('cors');
const routes = require('./routes');

require('./database/connection');

app.use(cors());
// use express.json to parse json data from the body
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
});
