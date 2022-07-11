const model = require('../models')

const getAllEmployers = async (req, res) => {
  try {
    const employers = await model.employers.findAll()

    return employers
      ? res.send(employers)
      : res.sendStatus(404)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return res.sendStatus(500)
  }
}


module.exports = {
  getAllEmployers
}
