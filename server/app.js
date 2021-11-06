const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
// use express.json to parse json data from the body
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
});
