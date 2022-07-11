const model = require('../models')

const getAllPolicies = async (req, res) => {
  try {
    const policies = await model.policies.findAll()

    return policies
      ? res.send(policies)
      : res.sendStatus(404)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return res.sendStatus(500)
  }
}


module.exports = {
  getAllPolicies
}
