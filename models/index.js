const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const employeesModel = require('./employees')
const employersModel = require('./employers')
const policiesModel = require('./policies')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const employee = employeesModel(connection, Sequelize, employers)
const employers = employersModel(connection, Sequelize)
const policies = policiesModel(connection, Sequelize, employers)



module.exports = {
  employee,
  employers,
  policies,
  Op: Sequelize.Op
}
