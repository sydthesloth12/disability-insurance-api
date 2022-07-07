/* eslint-disable quotes */
const express = require('express');
const { indexRender, catchAll } = require('./controllers/disabilityIns')

const app = express();

app.use(express.static("public"));

app.set("view engine", "pug");

app.get('/', indexRender);

app.all('*', catchAll);

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on http://localhost:1337");
});
