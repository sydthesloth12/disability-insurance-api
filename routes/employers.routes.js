const express = require('express')
const router = express.Router()
const {
  getAllEmployers,
} = require('../controllers/employers.ctrl')

router.get('/', getAllEmployers)

module.exports = router
