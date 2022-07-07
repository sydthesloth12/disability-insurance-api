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

const employees = employeesModel(connection, Sequelize, employers)
const employers = employersModel(connection, Sequelize)
const policies = policiesModel(connection, Sequelize, employers)

employees.belongsTo(employers)
employers.hasMany(employees)

policies.belongsTo(employers)
employers.hasMany(policies)

module.exports = {
  employees,
  employers,
  policies,
  Op: Sequelize.Op
}
