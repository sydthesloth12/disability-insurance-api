const employers = (connection, Sequelize) => {
  return connection.define(('employers'), {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    companyName: { type: Sequelize.STRING, allowNull: false },
    stdPolicy: { type: Sequelize.INTEGER, allowNull: false },
    ltdPolicy: { type: Sequelize.INTEGER, allowNull: false, },
    businessAddress: { type: Sequelize.STRING, allowNull: false },
  })
}

module.exports = employers
