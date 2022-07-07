const policies = (connection, Sequelize, employers) => {
  return connection.define(('policies'), {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    employerId: { type: Sequelize.INTEGER, allowNull: false, references: { model: employers, key: 'id' } },
    coverageType: { type: Sequelize.STRING, allowNull: false },
    funding: { type: Sequelize.STRING, allowNull: false, },
    policyNumber: { type: Sequelize.INTEGER, allowNull: false },
    policyEDOC: { type: Sequelize.STRING, allowNull: false },
  })
}

module.exports = policies

