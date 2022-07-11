const model = require('../models')

const getAllEmployees = async (req, res) => {
  try {
    const employees = await model.employees.findAll()

    return employees
      ? res.send(employees)
      : res.sendStatus(404)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return res.sendStatus(500)
  }
}


module.exports = {
  getAllEmployees
}
