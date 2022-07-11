/* eslint-disable quotes */
const express = require('express');
const { indexRender, catchAll } = require('./controllers/disabilityIns')


const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

const employersRouter = require('./routes/employers.routes')
const employeesRouter = require('./routes/employees.routes')
const policiesRouter = require('/routes/policies.routes')

app.use('/api/employers', employersRouter)
app.use('/api/employees', employeesRouter)
app.use('/api/policies', policiesRouter)


app.get('/', indexRender);

app.all('*', catchAll);

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on http://localhost:1337");
});
