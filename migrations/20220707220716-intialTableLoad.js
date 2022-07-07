'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      companyName: { type: Sequelize.STRING, allowNull: false },
      stdPolicy: { type: Sequelize.INTEGER, allowNull: false },
      ltdPolicy: { type: Sequelize.INTEGER, allowNull: false, },
      businessAddress: { type: Sequelize.STRING, allowNull: false },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })

    await queryInterface.createTable('employees', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      ssn: { type: Sequelize.STRING, allowNull: false, },
      dob: { type: Sequelize.STRING, allowNull: false },
      products: { type: Sequelize.STRING, allowNull: false },
      employerId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'employers', key: 'id' } },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })

    return queryInterface.createTable('policies', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      employerId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'employers', key: 'id' } },
      coverageType: { type: Sequelize.STRING, allowNull: false },
      funding: { type: Sequelize.STRING, allowNull: false, },
      policyNumber: { type: Sequelize.INTEGER, allowNull: false },
      policyEDOC: { type: Sequelize.STRING, allowNull: false },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })
  },



  async down(queryInterface) {
    await queryInterface.dropTable('employers')
    await queryInterface.dropTable('employees')

    return queryInterface.dropTable('policies')
  }
}
