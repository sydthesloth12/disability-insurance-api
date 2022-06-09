const indexRender = (req, res) => {
  return res.render('home')
}

const catchAll = (req, res) => {
  return res.sendStatus(404)
}

module.exports = { indexRender, catchAll }