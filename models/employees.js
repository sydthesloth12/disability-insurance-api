const employees = (connection, Sequelize, employers) => {
  return connection.define(('employees'), {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    ssn: { type: Sequelize.STRING, allowNull: false, },
    dob: { type: Sequelize.STRING, allowNull: false },
    products: { type: Sequelize.STRING, allowNull: false },
    employerId: { type: Sequelize.INTEGER, allowNull: false, references: { model: employers, key: 'id' } },
  })
}

module.exports = employees

