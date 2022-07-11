const express = require('express')
const router = express.Router()
const {
  getAllEmployees,
} = require('../controllers/employees.ctrl')

router.get('/', getAllEmployees)

module.exports = router
